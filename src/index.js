import React from 'react'
import ReactDOM from 'react-dom'
import { subscribe } from 'react-contextual'
import { ThemeContext, ThemeProvider } from './Theme'
import { TimeContext, TimeProvider } from './Time'
import Test from './Test'

ReactDOM.render(
  <ThemeProvider>
    <TimeProvider>
      <Test />
    </TimeProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
