// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

// Create the browser window.
const createWindow = () => {
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        frame: true,
        autoHideMenuBar: true,
        icon: './img/electron.ico'
    })
    // Loading the index.html of the app.
    win.loadFile('./index.html')
}

// Initialization and is ready to create browser windows.
app.whenReady().then(() => {
    createWindow()
})

// Quit when all windows are closed,
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
