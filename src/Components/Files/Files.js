import React, { Component } from 'react'
import '../Assets/Commoncss/Common.css' 
import './Files.css'
class Files extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                        <div class="row text-center">
                        <div class="col-12  ">
                            <h1 class="text-dcor ">FILES & STORAGE</h1>
                        </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row">
                    <div class="col-12">
                    <img 
                    className="img-logo "
                    src={require('../../Components/Assets/images/Filing.png')}
                    alt="logo"
                  />
                    </div>
                </div>
                <div class="row fullclr2">
                    <div class="col-0 col-sm-0 col-md-4 col-lg-4 col-xl-4 "></div>
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="row text-center">
                        <div class="col-12  ">
                            <h1 class="NEW ">NEW In </h1>
                        </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row fullclr2">
                    <div class="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
                        <div class="row text-center">
                        <div class="col-12  ">
                            <h6 class="NEwdowntext">Treat yourself to some new stationery. Maybe a new pen, notebook, or pencil! Dive into the autumn aesthetic.</h6>
                        </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row fullclr2">
                    <div class="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                        <div class="row text-center">
                        <div class="col-12  pad-btn">
                        <a  href ="#">
                            <button type="button"   class="btn btn-border button-hover text-center">SHOP NOW</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
             
              
                
            </div>
        )
    }
}

export default Files
