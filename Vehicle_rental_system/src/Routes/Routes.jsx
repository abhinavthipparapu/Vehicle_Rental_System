import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home/Home.jsx'
import Login from '../components/Login/Login.jsx'
import Register from '../components/Register/Register.jsx'

function Routes(){
    return(
        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/login" exact component={Login}/>
            <Route path = "/register" exact component={Register}/>
        </Switch>
    )
}

export default Routes
