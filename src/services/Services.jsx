// import {motion} from 'framer-motion';
import {Grid, Container} from '@mui/material'
function Services() {
    return ( 
        <section className='services'>
            <Container>
                <Grid container spacing={6}>
                    <Grid item lg={3}>
                        <div className="service-item">
                            <span>
                                <i class="ri-truck-line"></i>
                            </span>
                                <div>
                                    <h3>Free Shipping</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            
                        </div>
                    </Grid>
                     <Grid item lg={3}>
                     <div className="service-item">
                            <span>
                                <i class="ri-refresh-line"></i>
                            </span>
                                <div>
                                    <h3>Easy Returns</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            
                        </div>
                    </Grid> 
                    <Grid item lg={3}>
                        <div className="service-item">
                            <span>
                                <i class="ri-secure-payment-line"></i>
                            </span>
                                <div>
                                    <h3>Secure Payment</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            
                        </div>
                    </Grid>

                    <Grid item lg={3}>
                        <div className="service-item">
                            <span>
                                <i class="ri-exchange-dollar-line"></i>
                            </span>
                                <div>
                                    <h3>Back Guarantee</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            
                        </div>
                    </Grid> 
                </Grid>
            </Container>
        </section>
     );
}

export default Services;