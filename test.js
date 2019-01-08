const {app, BrowserWindow} = require('electron')
const {ipcMain} = require('electron')

//create windows for studio-app's index.html, brinton's index.html, and iro's index.html
function createWindow() {
	//studio-app's html
	home_win = new BrowserWindow({width: 800, height:600})
	home_win.loadFile('test-index.html')
	
	//project #1's home page html
	test_win = new BrowserWindow({parent: home_win, show: false})
	test_win.loadFile('project1/test.html')
	
	home_win.webContents.openDevTools()
	
	home_win.on('closed', () => {
		home_win = null	
	})
}

//opens the test page (will be home page of a project)
ipcMain.on('openTest', (event) => {
	test_win.show()
})

//closes the test page (home page for whatever project)
ipcMain.on('helloMain', (event) => {
	test_win.hide()
})

app.on('ready', createWindow)