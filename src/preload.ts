/* eslint-disable node/no-unpublished-import */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('api', {
  listAnalisys: (args: unknown) => ipcRenderer.invoke('listAnalisys', args),
});
