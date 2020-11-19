import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/sign-in">Sign in</Link>
                    </li>

                    <li>
                        <Link to="/sign-up"> Register </Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}
export default home