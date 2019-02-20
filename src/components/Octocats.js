import React, { Component } from 'react'

class Octocats extends Component {
  render() {
    return <img className="cats" src={this.props.catImages} />
  }
}

export default Octocats
