import React from 'react'
import Container from '@material-ui/core/Container';
import BrandName from './BrandName';

const NavBar = () => {
    return (
        <nav>
            <Container maxWidth="md" className="nav-bar">
                <BrandName />   
                <div className="btn">
                    <div className="sign-in"> Sign in </div>
                    <div className="join-now"> Join now </div>
                </div>
            </Container>
            
        </nav>
        
    )
}

export default NavBar
