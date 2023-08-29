/* eslint-disable node/no-unpublished-import */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('api', {
  listProject: (args: unknown) => ipcRenderer.invoke('listProject', args),
  createProject: (args: unknown) => ipcRenderer.invoke('createProject', args),
  getProject: (args: unknown) => ipcRenderer.invoke('getProject', args),
  updateProject: (args: unknown) => ipcRenderer.invoke('updateProject', args),
  createScenario: (args: unknown) => ipcRenderer.invoke('createScenario', args),
  listScenarios: (args: unknown) => ipcRenderer.invoke('listScenarios', args),
  getScenario: (args: unknown) => ipcRenderer.invoke('getScenario', args),
  updateScenario: (args: unknown) => ipcRenderer.invoke('updateScenario', args),
  createPricing: (args: unknown) => ipcRenderer.invoke('createPricing', args),
});
