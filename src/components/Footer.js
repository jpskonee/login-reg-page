import React from 'react'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import BrandName from './BrandName'

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="lg">
                <Grid container className="footer-bar">
                    <Grid item lg={2} md={4} sm={5} xs={6}>
                        <BrandName />
                    </Grid>
                    <Grid item lg={2} md={4} sm={3} xs={3}>
                        <div>News</div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={3} xs={3}>
                        <div>About Us</div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={3} xs={3}>
                        <div>Contact Us</div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={3} xs={3}>
                        <div>Blog</div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={3} xs={3}>
                        <div>Donate</div>
                    </Grid>
               </Grid>    
            </Container>
        </footer>
    )
}

export default Footer
