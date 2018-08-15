import React from 'react'
import { ThemeContext, ActionTypes } from './Theme'
import { TimeContext } from './Time'
import { subscribe } from 'react-contextual'

class Test extends React.Component {
  componentWillReceiveProps(props) {
    console.log(this.props.state.theme)
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.state.theme === 'light' ? '#000' : '#ddd' }}>
          Date Now :{this.props.time}
        </h1>
        <button onClick={e => this.props.state.dispatch({ type: ActionTypes.TOGGLE })}>
          Change!
        </button>
      </div>
    )
  }
}

export default subscribe([ThemeContext, TimeContext], ['state', 'time'])(Test)
