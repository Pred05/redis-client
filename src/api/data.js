import * as RequestUtil from './util/request-util';

module.exports = (webContents, ipcMain, datasource) => {
  ipcMain.on('refreshDatasources', () => {
    console.log('refreshDatasources');
    console.log(datasource.getDatasourceInfoList());
    webContents.send('datasource', datasource.getDatasourceInfoList());
  });

  ipcMain.on('refreshData', (evt, args) => {
    try {
      const command = RequestUtil.getMultiFromString(args.request);

      console.log(command);
      datasource.getDatasource(args.key).MULTI([command]).exec((err, replies) => {
        webContents.send('data', {
          type: RequestUtil.getCommandType(command),
          data: replies[0]
        });
      });
    } catch (e) {
      console.log(e);
    }
  });

  ipcMain.on('key', (evt, args) => {
    datasource.getDatasource(args.datasourcekey).GET(args.key, (err, replies) => {
      webContents.send('key-value', replies);
    });
  });

  ipcMain.on('addKey', (evt, args) => {
    datasource.getDatasource(args.datasourcekey).SET(args.key, '');
    // TODO: pass request in argument to update value
    datasource.getDatasource(args.datasourcekey).MULTI([['KEYS', '*']]).exec((err, replies) => {
      webContents.send('data', {
        type: 'key',
        data: replies
      });
    });
  });
};
