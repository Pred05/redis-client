import * as RequestUtil from './util/request-util';

module.exports = (webContents, ipcMain, datasourceList) => {
  ipcMain.on('refreshDatasources', () => {
    webContents.send('datasource', datasourceList);
  });

  ipcMain.on('refreshData', (evt, args) => {
    try {
      const command = RequestUtil.getMultiFromString(args.request);

      console.log(command);
      datasourceList[args.key].datasource.MULTI([command]).exec((err, replies) => {
        webContents.send('data', replies[0]);
      });
    } catch (e) {
      console.log(e);
    }
  });

  ipcMain.on('key', (evt, args) => {
    datasourceList[args.datasourcekey].datasource.GET(args.key, (err, replies) => {
      webContents.send('key-value', replies);
    });
  });

  ipcMain.on('addKey', (evt, args) => {
    datasourceList[args.datasourcekey].datasource.SET(args.key, '');
    // TODO: pass request in argument to update value
    datasourceList[args.datasourcekey].datasource.MULTI([['KEYS', '*']]).exec((err, replies) => {
      webContents.send('data', replies);
    });
  });
};
