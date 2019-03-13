module.exports = (webContents, ipcMain, datasourceList) => {
  ipcMain.on('refreshDatasources', () => {
    webContents.send('datasource', datasourceList);
  });

  ipcMain.on('refreshData', (evt, args) => {
    datasourceList[args.key].datasource.MULTI([['KEYS', '*']]).exec((err, replies) => {
      webContents.send('data', replies);
    });
  });

  ipcMain.on('key', (evt, args) => {
    datasourceList[args.datasourcekey].datasource.GET(args.key, (err, replies) => {
      console.log(replies);
      webContents.send('key-value', replies);
    });
  });

  ipcMain.on('addKey', (evt, args) => {
    datasourceList[args.datasourcekey].datasource.SET(args.key, '');
    datasourceList[args.datasourcekey].datasource.MULTI([['KEYS', '*']]).exec((err, replies) => {
      webContents.send('data', replies);
    });
  });
};
