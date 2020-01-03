import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
            <div class="container-fluid ">
                <div class="row row-clr">
                <div class="col-0 col-sm-1 col-md-2 col-lg-4 col-xl-4"></div>
                <div class="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                    <div class="row"> 
                    <div class="col-3">
                    <img 
                        className="img home-logo-2 "
                        src={require('../../Components/Assets/Icons/copyright.png')}
                        alt="logo"
                        />
                    </div>
                    <div class="col-3">
                    <h1 class="set-wet">PENCILS</h1>
                    </div>
                    <div class="col-6">
                    <h1 class="set-wet-1">All Rights Reserved 2019</h1>
                    </div>
                    </div>
                </div>
                <div class="col-0 col-sm-1 col-md-2 col-lg-4 col-xl-4"></div>
                </div>
            </div>
        )
    }
}

export default Footer
