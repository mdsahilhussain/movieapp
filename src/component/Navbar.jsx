import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:"flex", padding:"2px"}}>
          <h1>Movies Apps</h1>
          <h4 style={{marginLeft:"2rem", marginTop:'1.5rem'}}>Favourites</h4>
      </div>
    )
  }
}
