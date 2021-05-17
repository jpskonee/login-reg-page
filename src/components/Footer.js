import { Container } from '@material-ui/core'
import React from 'react'
import BrandName from './BrandName'

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="lg">
                <div className="footer-bar">
                    <BrandName />
                    <div>Footer</div>
                    <div>Footer</div>
                    <div>Footer</div>
                    <div>Footer</div>
                    <div>Footer</div>
                    <div>Footer</div>
                    <div>Footer</div>
               </div>
            </Container>
        </footer>
    )
}

export default Footer
