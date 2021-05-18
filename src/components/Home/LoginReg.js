import {Grid } from '@material-ui/core'
import React from 'react'
import BrandName from "../BrandName";



const LoginReg = ({ login, setLogin }) => {

    const handleSignIn = (e) => {
        e.preventDefault();
        setLogin(true)
    }

    const handleJoinNow = (e) => {
        e.preventDefault();
        setLogin(false)
    }
    
    return (
        <section>
            {login ? <Grid container>
                <Grid className="login-page" item lg={4} md={6} sm={6} xs={11}>
                    <BrandName />
                    <form>
                    <div>
                        <input placeholder="Email" />
                    </div>
                    <div>
                        <input placeholder="Password" />
                    </div>
                    <div className="login-btn"> Login </div>
                    </form>

                    <div className="txt-forget-pwd"> Forgot Password? </div>
                    <div className="txt-do-you"> Don't have an account ?
                    <span
                        onClick= {handleJoinNow}
                        className="txt-join"> Join now!</span> </div>
                </Grid>
            </Grid> :  <Grid container>
                <Grid className="login-page" item lg={4} md={6} sm={6} xs={11}>
                    <BrandName />
                    <form>
                    <div>
                        <input placeholder="First Name" />
                    </div>
                    <div>
                        <input placeholder="Last Name" />
                    </div>
                    <div>
                        <input placeholder="Username" />
                    </div>
                    <div>
                        <input placeholder="Email" />
                    </div>
                    <div>
                        <input placeholder="Password" />
                    </div>
                    <div className="login-btn"> Join Now </div>
                    </form>

                        <div className="txt-do-you"> Do you have an account? <span
                            onClick={handleSignIn}
                            className="txt-join"> Sign in!</span> </div>
                </Grid>
            </Grid>}
        </section>
    )
}

export default LoginReg
