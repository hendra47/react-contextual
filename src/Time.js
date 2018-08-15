import React, { createContext } from 'react'

export const TimeContext = createContext()
export class TimeProvider extends React.Component {
  state = { time: new Date().toLocaleString() }
  componentDidMount() {
    this.handler = setInterval(
      () => this.setState(state => ({ time: new Date().toLocaleString() })),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.handler)
  }
  render() {
    return <TimeContext.Provider value={this.state.time} children={this.props.children} />
  }
}
