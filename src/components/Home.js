import React, { useState } from 'react'
import LoginReg from './Home/LoginReg'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
//import Container from '@material-ui/core/Container';


const Home = () => {

    const [login, setLogin] = useState(true);
    

    return (
            <div>
                <NavBar  
                    login={login}
                    setLogin={setLogin}
                />
                <LoginReg
                    login={login}
                    setLogin={setLogin}/>
                <Footer />
            </div>
    )
}

export default Home
