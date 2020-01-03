import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
           <React.Fragment>

                    
        <div class="container-fluid ">
          
          <nav class="navbar navbar-expand-lg ">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">
    <img 
                    className="img-logo "
                    src={require('../../Components/Assets/Icons/list.png')}
                    alt="logo"
                  />
    </span>
  </button>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">

      <li class="nav-item active mzy">
        <Link class="nav-link homestyle" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Stationary">Stationery <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Notebook">Notebooks <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Files">Files & Storage <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Cards">Cards & Wraps <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Gifts">Gifts <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Bag">Bag & Accessories <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Art">Art <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active mzy">
        <Link class="nav-link mzy2" to="Party">Weeding & Party <span class="sr-only">(current)</span></Link>
      </li>

    </ul>
  
  </div>
</nav>
 
        </div>
   
           </React.Fragment>
        )
    }
}

export default Header
