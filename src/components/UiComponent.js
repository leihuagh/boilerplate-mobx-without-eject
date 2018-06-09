import React, { Component, Fragment } from 'react'

import { Provider } from 'mobx-react'
import { UiStore } from './../stores'
import { Ui } from './uicomponents'

class UiComponent extends Component {
  render() {
    return (
      <Provider UiStore={UiStore}>
        <Fragment>
          <Ui />
        </Fragment>
      </Provider>
    )
  }
}

export default UiComponent
