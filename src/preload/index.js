import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electronAPI', {
      createUser: (fullName, email) =>
        electronAPI.ipcRenderer.invoke('createUser', { fullName, email }),
      allUsers: () => electronAPI.ipcRenderer.invoke('allUsers')
    })
  } catch (error) {
    console.error(error)
  }
}
