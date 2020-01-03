import React, { Component } from 'react'

import Stationary from '../../Stationary/Stationary'
import Notebook from '../../Notebook/Notebook'
import Files from '../../Files/Files'
import Cards from '../../Cards/Cards'
import Gifts from '../../Gifts/Gifts'
import Bag from '../../bag/Bag'
import Art from '../../Art/Art'
import Party from '../../party/Party'
import Footer from '../../Footer/Footer'

class Homeview extends Component {
    render() {
        return (
            <div>
                  <React.Fragment>
                   
                    <Stationary/>
                    <Notebook/>
                    <Files/>
                    <Cards/>
                    <Gifts/>
                    <Bag/>
                    <Art/>
                    <Party/>
                
                </React.Fragment>
            </div>
        )
    }
}

export default Homeview
