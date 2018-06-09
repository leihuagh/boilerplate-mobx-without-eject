import React, { Component } from 'react'

import { Provider } from 'mobx-react'
import { UiStore } from './../stores'

class UiComponent extends Component {
  render() {
    return (
      <Provider UiStore={UiStore}>
        <div>
          <h1>UiComponent</h1>
        </div>
      </Provider>
    )
  }
}

export default UiComponent
