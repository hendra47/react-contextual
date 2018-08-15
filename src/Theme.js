import React, { createContext } from 'react'

export const ThemeContext = createContext()
export const ActionTypes = {
  TOGGLE: 'TOGGLE'
}

const reducer = (state, action) => {
  if (action.type === ActionTypes.TOGGLE) {
    return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
  }
}
export class ThemeProvider extends React.Component {
  state = {
    theme: 'light',
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }
  render() {
    return <ThemeContext.Provider value={this.state}>{this.props.children}</ThemeContext.Provider>
  }
}
