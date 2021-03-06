const path = require('path');
const url = require('url');

const {
  app,
  nativeImage,
  BrowserWindow,
  ipcMain: ipc,
} = require('electron');

const localShortcut = require('electron-localshortcut');

const menu = require('./menu');

const logo = nativeImage.createFromPath(path.join(__dirname, '../assets/images/logo.png'));

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show: false,
    frame: false,
    width: 800,
    height: 600,
    minWidth: 640,
    minHeight: 480,
    icon: logo,
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.maximize();
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  registerAccelerators(mainWindow, menu(dispatch));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

ipc.on('modal', (e, {response}) => {
  dispatch(response);
});

function dispatch(action) {
  mainWindow.webContents.send('action', action);
}

function registerAccelerators(win, menuItems) {
  menuItems.forEach((item) => {
    if (item.accelerator && item.click) {
      localShortcut.register(win, item.accelerator, item.click);
    }

    if (item.submenu) {
      registerAccelerators(win, item.submenu);
    }
  });
}
