// import {Link} from 'react-router-dom'
import {Container, Grid} from '@mui/material'
function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={4}>
                        <div className="nav-logo">
                            {/* <div className="nav-logo-img">
                                <img src="https://raw.githubusercontent.com/codingwithmuhib/Maltimart-ecommerce/start-up/src/assets/images/eco-logo.png" alt="logo" />
                            </div> */}
                            <h4 className='nav-logo-name'>
                                Maltimart
                            </h4>
                            <p className='footer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident possimus reprehenderit ipsa consequatur,liquid.</p>
                        </div>
                    </Grid>
                    <Grid item lg={3}>
                            <h4 className='nav-logo-name'>
                                Top Category
                            </h4>
                            <p>Mobile Phones</p>
                            <p>Mobile Phones</p>
                            
                    </Grid>
                    <Grid item lg={2}>
                            <h4 className='nav-logo-name'>
                                Useful Link
                            </h4>
                            <p>Shop</p>
                            <p>Cart</p>
                           
                    </Grid>
                    <Grid item lg={3}>
                        <h4 className='nav-logo-name'>
                                Contact
                            </h4>
                            <p><i class="ri-map-pin-line"></i> 217 Bui Dinh Tuy</p>
                            <p><i class="ri-phone-line"></i> 090512454</p>
                            <p><i class="ri-mail-line"></i> vietdang@gmail.com</p>
                            
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;