import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul style={{listStyle: "none"}}>
                    <li style={{display: "inline", marginRight: 20}} >
                        <Link to="/sign-in">Sign in</Link>
                    </li>

                    <li style={{display: "inline"}}>
                        <Link to="/sign-up"> Register </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
