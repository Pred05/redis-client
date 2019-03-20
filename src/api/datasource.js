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
    datasource_status: 'OFF',
  },
};

const datasourceList = {};

function createRedisClient(host, port) {
  const redisClient = redis.createClient({ host, port });
  datasourceList[DatasourceUtil.getDatasourceKeyByUrlAndPort(host, port)] = redisClient;
  return redisClient;
}


module.exports = {
  init: () => {
    // Load saved datasource
    dbDatasources.find({}, (err, docs) => {
      if (docs) {
        docs.forEach((item) => {
          datasourceInfoList[DatasourceUtil.getDatasourceKeyByDatasource(item)] = {
            name: item.name,
            host: item.host,
            port: item.port,
            datasource_status: 'OFF',
          };
        });
      }
    });

    // Create all datasource
    Object.keys(datasourceInfoList, (keys) => {
      keys.forEach((key) => {
        const item = datasourceInfoList[key];
        createRedisClient(item.host, item.port);
      });
    });
  },
  addDatasource: (name, host, port) => {
    dbDatasources.insert({ name, host, port }, (err, doc) => {
      if (err) {
        // TODO: handle error
      }

      datasourceInfoList[DatasourceUtil.getDatasourceKeyByDatasource(doc)] = {
        name: doc.name,
        host: doc.host,
        port: doc.port,
        datasource_status: 'OFF',
      };

      createRedisClient(doc.host, doc.port);
    });
  },
  getDatasourceInfoList: () => datasourceInfoList,
  getDatasource: key => datasourceList[key],
};
