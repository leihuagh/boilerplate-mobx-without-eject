import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('UiStore')
@observer
class Ui extends Component {
  render() {
    const { UiStore } = this.props
    console.log(UiStore)
    return (
      <div>
        <h1>Ui</h1>
      </div>
    )
  }
}

export default Ui
