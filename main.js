const { app, BrowserWindow, ipcMain, Notification, Menu, Tray } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

const dockIcon = path.join(__dirname, 'assets', 'icons', 'app_icon.png');
const appIcon = path.join(__dirname, 'assets', 'icons', 'app_icon.png');
const trayIcon = path.join(__dirname, 'assets', 'icons', 'app_icon.png');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#6e707e',
    icon: appIcon,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
  isDev && win.webContents.openDevTools();
  return win;
}

function createSplashWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 200,
    icon: appIcon,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });

  win.loadFile('splash.html');
  return win;
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
}

if (process.platform === 'darwin') {
  app.dock.setIcon(dockIcon);
}

let tray = null;
app.whenReady().then(() => {
  const template = require('./utils/Menu').createTemplate(app);
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  tray = new Tray(trayIcon);
  tray.setContextMenu(menu);
  const splash = createSplashWindow();
  const mainApp = createWindow();

  mainApp.once('ready-to-show', () => {
    setTimeout(() => {
      splash.destroy();
      mainApp.show();
    }, 2000);
  });
});

ipcMain.on('notify', (event, message) => {
  new Notification({ title: 'Notification', body: message }).show();
});

ipcMain.on('app-quit', () => {
  app.quit();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
