import React from 'react'
import {Link} from 'react-router-dom'
import { Bootstrap } from "react-bootstrap"


function Header(){
    return(
        <header className="py-3 border-bottom border-light shadow-sm">
            <div>
                <h4>Easy Drive</h4>
            </div>
            <div className='float'>
                <span>
                    <Link to= "/">Home | </Link>
                </span>
                <span>
                    <Link to= "/Login">Login | </Link>
                </span>
                <span>
                    <Link to= "/Register">Register</Link>
                </span>
            </div>
        </header>
    )
}

export default Header