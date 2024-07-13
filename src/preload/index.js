import { contextBridge, dialog } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { getCurrentWindow } from '@electron/remote'
import axios from 'axios'

const currentWindow = getCurrentWindow()

// Custom APIs for renderer
const api = {
  dialog: {
    showMessageBox(options) {
      return dialog.showMessageBox(currentWindow, options)
    }
  },

  maximize() {
    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize()
    } else {
      currentWindow.maximize()
    }
  },

  minimize() {
    currentWindow.minimize()
  },

  close() {
    dialog
      .showMessageBox(currentWindow, {
        type: 'question',
        buttons: ['Yes', 'No'],
        defaultId: 1,
        title: 'Confirm',
        message: 'Are you sure you want to close the window?'
      })
      .then(({ response }) => {
        if (response === 0) {
          currentWindow.close()
        }
      })
  },

  // check toggle maximize/unmaximize
  isMaximized() {
    currentWindow.on('maximize', () => {
      return true
    })

    currentWindow.on('unmaximize', () => {
      return false
    })
  },

  // fetch data from server
  async fetch_projects() {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/projects')
      const data = response.data
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}

// Setup custom titlebar
window.addEventListener('DOMContentLoaded', () => {})
