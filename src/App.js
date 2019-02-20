import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.png'
import Gobble from './images/gobble.gif'
import Lucha from './images/lucha.png'
import Mountie from './images/mountie.png'
import Sake from './images/sake.png'
import Octocats from './components/Octocats.js'

const cats = [Gobble, Lucha, Mountie, Sake]

class App extends Component {
  render() {
    return (
      <>
        <header>
          <img src={logo} />
        </header>
        {cats.map(catImages => (
          <Octocats catImages={catImages} />
        ))}
      </>
    )
  }
}

export default App
