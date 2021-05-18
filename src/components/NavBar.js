import React from 'react'
import Container from '@material-ui/core/Container';
import BrandName from './BrandName';

const NavBar = ({login, setLogin}) => {

    const handleSignIn = (e) => {
        e.preventDefault();
        setLogin(true)
    }

    const handleJoinNow = (e) => {
        e.preventDefault();
        setLogin(false)
    }

    return (
        <nav>
            <Container maxWidth="md" className="nav-bar">
                <BrandName />   
                <div className="btn">
                    <div onClick={handleSignIn} className="sign-in"> Sign in </div>
                    <div onClick={handleJoinNow} className="join-now"> Join now </div>
                </div>
            </Container>
            
        </nav>
        
    )
}

export default NavBar
