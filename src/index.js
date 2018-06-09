import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'mobx-react'
import { UiStore } from './stores'

ReactDOM.render(
  <Provider UiStore={UiStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
