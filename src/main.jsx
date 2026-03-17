import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Polyfill window.storage for environments without it
if (!window.storage) {
  const memStore = {};
  window.storage = {
    get: async (key) => {
      const val = localStorage.getItem(key);
      return val ? { key, value: val } : null;
    },
    set: async (key, value) => {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
      return { key, value };
    },
    delete: async (key) => {
      localStorage.removeItem(key);
      return { key, deleted: true };
    },
    list: async (prefix) => {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!prefix || k.startsWith(prefix)) keys.push(k);
      }
      return { keys };
    }
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
