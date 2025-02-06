import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from './store/store.js'
import { Provider } from 'react-redux'

import {  BrowserRouter } from 'react-router'

import './assets/css/bootstrap.min.css'
import './assets/css/icons.min.css'
import './assets/css/app.min.css'
import './assets/css/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
