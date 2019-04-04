import * as redis from 'redis';
import Datastore from 'nedb';
import * as DatasourceUtil from './util/datasource-util';


// Datastore
const dbDatasources = new Datastore({ filename: 'datasources.db', autoload: true });

// Default datasource
const datasourceInfoList = {
  'localhost:6379': {
    name: 'Localhost default database',
    host: 'localhost',
    port: '6379',
    datasourceStatus: 'OFF',
  },
};

const datasourceList = {};

function createRedisClient(host, port) {
  const redisClient = redis.createClient({ host, port });
  datasourceList[DatasourceUtil.getDatasourceKeyByUrlAndPort(host, port)] = redisClient;
  return redisClient;
}

function handlRedisClientEvent(redisClient, mainWindow) {
  redisClient.on('error', (err) => {
    console.log('Error address=', redisClient.address, ' error=', err);
    if (err.code === 'ECONNREFUSED') {
      datasourceInfoList[redisClient.address].datasourceStatus = 'OFF';
      mainWindow.webContents.send('datasource', datasourceInfoList);
    }
  });

  redisClient.on('connect', () => {
    console.log('Connect address=', redisClient.address);
    datasourceInfoList[redisClient.address].datasourceStatus = 'ON';
    mainWindow.webContents.send('datasource', datasourceInfoList);
  });
}

function addDatasource(mainWindow, name, host, port) {
  dbDatasources.insert({ key: DatasourceUtil.getDatasourceKeyByUrlAndPort(host, port), name, host, port }, (err, doc) => {
    if (err) {
      // TODO: handle error
    }

    datasourceInfoList[DatasourceUtil.getDatasourceKeyByDatasource(doc)] = {
      name: doc.name,
      host: doc.host,
      port: doc.port,
      datasourceStatus: 'OFF',
    };

    const redisClient = createRedisClient(doc.host, doc.port);
    handlRedisClientEvent(redisClient, mainWindow);
  });
}

function deleteDatasource(datasourceKey) {
  delete datasourceInfoList[datasourceKey];
  delete datasourceList[datasourceKey];
  dbDatasources.remove({ key: datasourceKey }, {}, (err, numRemoved) => {
    console.log(numRemoved);
  });
}

module.exports = {
  init: (mainWindow, ipcMain) => {
    // Load saved datasource
    dbDatasources.find({}, (err, docs) => {
      if (docs) {
        docs.forEach((item) => {
          datasourceInfoList[DatasourceUtil.getDatasourceKeyByDatasource(item)] = {
            name: item.name,
            host: item.host,
            port: item.port,
            datasourceStatus: 'OFF',
          };
        });
      }
    });

    // Create all datasource
    Object.keys(datasourceInfoList).forEach((key) => {
      const item = datasourceInfoList[key];
      const redisClient = createRedisClient(item.host, item.port);
      handlRedisClientEvent(redisClient, mainWindow);
    });

    // Datasources events
    ipcMain.on('submitNewDatasource', (evt, args) => {
      addDatasource(mainWindow, args.name, args.host, args.port);
    });

    ipcMain.on('deleteDatasource', (evt, args) => {
      deleteDatasource(DatasourceUtil.getDatasourceKeyByDatasource(deleteDatasource));
    });

    return datasourceInfoList;
  },
  addDatasource,
  deleteDatasource: deleteDatasource,
  getDatasourceInfoList: () => datasourceInfoList,
  getDatasource: key => datasourceList[key],
};
