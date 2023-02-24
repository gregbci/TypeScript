// This application demonstrates how to use the Web Bluetooth API
// it was adapted from: https://github.com/electron/electron/tree/main/docs/fiddles/features/web-bluetooth

"use strict";

import { app, BrowserWindow, BluetoothDevice } from 'electron';

const Greg = require('./settings/greg');
//import Greg from 'greg';


function createWindow() {
   const win = new BrowserWindow({
      width: 800,
      height: 600,
   });

   // Device scans start with calling Bluetooth.requestDevice(...) on the renderer side.  
   // When devices are found, this event is triggered.  We can use this event to present 
   // a device picker to the user, or we can automaically pick something.
   win.webContents.on('select-bluetooth-device', handleBluetoothSelect);

   win.loadFile('src/window.html');
}


function handleBluetoothSelect(event: Event, devices: BluetoothDevice[], callback: (deviceId: string) => void) {
   event.preventDefault();

   // just pick the first device discovered (requestDevice() handles filtering)
   if (devices && devices.length > 0) {
      callback(devices[0].deviceId);
   }
}

app.whenReady().then(() => {
   createWindow();

   // dummy action to test included modules
   let greg = new Greg();
   greg.sayHello();

   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
         createWindow();
      }
   });
});

app.on('window-all-closed', () => {
   console.log("Bye");
   app.quit();
});


