import React from 'react'
import styles from './Register.module.css'

function Register(){
    // let bikesData = Data

    return(
        <div style={{ paddingLeft:800 }}>
            <div class={styles.display}>
                <label for="name">Name: </label>
                <input name="name" type='text' placeholder="Enter Your Name"></input>
                <br/>
                <br/>
                <label for="email">Username: </label>
                <input name="email" type='text' placeholder="Enter Your Email"></input>
                <br/>
                <br/>
                <label for="username">Password: </label>
                <input name="username" type='text' placeholder="Enter Your Name"></input>
                <br/>
                <br/>
                <label for="password">Confirm Password:     </label>
                <input name="password" type='password' placeholder="Enter Your Password"></input>
                <br/>
                <br/>
                <button>Login</button>
            </div>
        </div>
        
    )
}
export default  Register