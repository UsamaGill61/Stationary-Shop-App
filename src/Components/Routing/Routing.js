import React, { Component } from 'react'
import {  Switch, Route } from 'react-router-dom';
import Homeview from '../Views/Homeview/Homeview';
import Navtoptext from '../Navtoptext/Navtoptext';
import Header from '../Header/Header';
import Stationary from '../Stationary/Stationary';
import Notebook from '../Notebook/Notebook';
import Files from '../Files/Files';
import Cards from '../Cards/Cards';
import Gifts from '../Gifts/Gifts';
import Bag from '../bag/Bag';
import Art from '../Art/Art';
import Party from '../party/Party';
import Footer from '../Footer/Footer';
class Routing extends Component {
    render() {
        return (
            <React.Fragment>
                <Navtoptext/>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Homeview} />
                    <Route path='/Stationary' component={Stationary} />
                    <Route path='/Notebook' component={Notebook} />
                    <Route path='/Files' component={Files} />
                    <Route path='/Cards' component={Cards} />
                    <Route path='/Gifts' component={Gifts} />
                    <Route path='/Bag' component={Bag} />
                    <Route path='/Art' component={Art} />
                    <Route path='/Party' component={Party} />
                   
                
                </Switch>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Routing
 
