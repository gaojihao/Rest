const {app, BrowserWindow,ipcMain,Tray} = require('electron');
const path = require('path');


let forceQuit = false;
let mainWindow;

ipcMain.on('min', () => mainWindow.minimize());
ipcMain.on('max', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on('show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  function createWindow () {
    // 创建浏览器窗口,宽高自定义具体大小你开心就好
    mainWindow = new BrowserWindow({
      width: 980,
      height: 850,
      minWidth: 950,
      minHeight: 700,
      titleBarStyle: 'hiddenInset',
      backgroundColor: '#021524'
    });
  
    // 开发环境使用 http 协议 生产环境使用 file 协议
    if (process.env.NODE_ENV === 'development') {
      mainWindow.loadURL('http://localhost:3000/');
    } else {
      mainWindow.loadURL(`file://${__dirname}/index.html`);
    }
  
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
    });
  
    mainWindow.setDocumentEdited(true);
  
    // 关闭window时触发下列事件.
    mainWindow.on('close', function (e) {
      if (forceQuit) {
        app.quit();
      } else {
        /**
         * If you close a browser window it will be destroyed, so you can't hide or show it again after that.
         * Since you want to hide it and show it again later your should add a listener for the close event that calls preventDefault()
         * and hides the window instead of closing it.
         */
        e.preventDefault();
        mainWindow.hide();
      }
    });
  
    // 托盘
    tray = new Tray(path.join(__dirname, '../assets/tray@4x.png'));
    tray.setToolTip('显示窗口');
  
    tray.on('click', () => {
      mainWindow.show();
    });
  
  }

  // 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', () => {
    createWindow();
  });

  app.on('window-all-closed', function () {
    // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', (e) => {
    if (!mainWindow.isVisible()) {
      mainWindow.show();
    }
  });
  
  app.on('before-quit', (e) => {
    forceQuit = true;
    mainWindow = null;
  });