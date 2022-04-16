import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:"flex", padding:"5px", background:"#3f51b5", color:"white", }}>
          <Link to={'/'} ><h1>Movies Apps</h1></Link>
          <Link to={'/favourites'}><h4 style={{marginLeft:"2rem", marginTop:'1rem'}}>Favourites</h4></Link>
      </div>
    )
  }
}
