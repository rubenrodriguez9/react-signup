import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class home extends Component {
    render() {
        return (
            <div>

               The greatest todo app on the planet. Sign up 
               <Link to="/sign-up" > here</Link>
                
            </div>
        )
    }
}
export default home