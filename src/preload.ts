/* eslint-disable node/no-unpublished-import */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('api', {
  listProject: (args: unknown) => ipcRenderer.invoke('listProject', args),
  createProject: (args: unknown) => ipcRenderer.invoke('createProject', args),
  getProject: (args: unknown) => ipcRenderer.invoke('getProject', args),
  createScenario: (args: unknown) => ipcRenderer.invoke('createScenario', args),
});
