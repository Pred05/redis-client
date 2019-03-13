import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
import * as redis from 'redis';
import Datastore from 'nedb';
import * as DatasourceUtil from './util/datasource-util';
import DataEvent from './event/data';

// Datastore
const datasources = new Datastore({ filename: 'datasources.db', autoload: true });


const datasourceList = {
  'localhost:6379': {
    name: 'Localhost default database',
    url: 'localhost',
    port: '6379',
    datasource: redis.createClient(),
  },
};

datasources.find({}, (err, docs) => {
  if (docs) {
    docs.forEach((item) => {
      datasourceList[DatasourceUtil.getDatasourceKey(item)] = {
        name: item.name,
        url: item.url,
        port: item.port,
        datasource: redis.createClient({ host: item.url, port: item.port }),
      };
    });
  }
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  Object.values(datasourceList).forEach((item) => {
    item.datasource.on('error', (err) => {
      console.log('Error {}', err);
      if (err.code === 'ECONNREFUSED') {
        mainWindow.webContents.send('datasource', datasourceList);
      }
    });
  });


  /* ipcMain.on('add', (evt, args) => {
    redisClient.SET(args.key, args.value);
    redisClient.KEYS('*', (err, replies) => {
      console.log(replies);
      mainWindow.webContents.send('added', replies);
    });
  }); */
  DataEvent(mainWindow.webContents, ipcMain, datasourceList);

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
