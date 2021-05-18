import { Container, Grid } from '@material-ui/core'
import React from 'react'
import BrandName from "../BrandName";
import TextField from '@material-ui/core/TextField';

const LoginReg = () => {
    return (
        <section>
            <Container className="login-page" maxWidth="sm">
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
            </Container>
        </section>
    )
}

export default LoginReg
