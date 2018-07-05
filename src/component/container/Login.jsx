import React, { Component } from 'react'

// Style
import '../../css/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="logo">
                        KittyGlitter
                    </div>
                    <a href="/auth/facebook" alt="facebook login button" >
                        <button id='facebook_login'>
                            Log in with Facebook
                        </button>
                    </a> 
                </div>
            </div>
        )
    }
}

export default Login