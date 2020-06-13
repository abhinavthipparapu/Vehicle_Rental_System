import React from 'react'
import styles from './Login.module.css'

function Login(){
    return(
        <div style={{paddingLeft:800}}>
            <div class={styles.display}>
                <label for="username">Username: </label>
                <input name="username" type='text' placeholder="Enter Your Name"></input>
                <br/>
                <br/>
                <label for="password">Password:     </label>
                <input name="password" type='password' placeholder="Enter Your Password"></input>
                <br/>
                <br/>
                <button>Login</button>
            </div>
        </div>
        
    )
}
export default  Login