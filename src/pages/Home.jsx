import Services from "../services/Services";
import Helmet from "../components/Helmet/Helmet";
import {Container, Grid} from '@mui/material'
import {Link} from "react-router-dom";
import {motion} from 'framer-motion'
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";
import {useEffect, memo} from 'react'
import {fetchHomeData} from '../features/Home'
import {useDispatch} from 'react-redux'

function Home() {
    const dispatch = useDispatch();
    const year = new Date().getFullYear();
    // useEffect(()=> {
    //     dispatch(fetchHomeData());
    //   }, [])

    return (
        <Helmet title={'Home'}>
            <section className="hero-section">
                <Container>
                    <Grid container>
                        <Grid item lg={6}>
                            <div className="hero-content">
                                <p className="hero-subtitle">Trending product in {year}</p>
                                <h2>Make Your Iterior More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic esse placeat modi blanditiis dolorem earum nobis ea iste aliquid nostrum assumenda culpa, fugit reiciendis dolores obcaecati ab eligendi nesciunt?</p>

                                <motion.button whileHover={{scale: 1.2}} className="shop-btn">
                                    <Link to='shop' style={{textDecoration: 'none', color: '#fff'}}>Shop now</Link>
                                </motion.button>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <div className="hero-img">
                                <img src="https://github.com/codingwithmuhib/Maltimart-ecommerce/blob/start-up/src/assets/images/hero-img.png?raw=true" alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Services/>

            <section className="trending-products">
                <Container>
                    <Grid container>
                        <Grid item lg={12}>
                            <h2 className="section-title">Trending Products</h2>
                        </Grid>
                        <Grid item lg={12}>
                            <ProductList/>
                        </Grid>
                    </Grid>
                </Container>
            </section>


            <section className="timer-count">
                <Container>
                    <Grid container spacing={8}>
                        <Grid item lg={8} md={6}>
                            <div className="clock-content">
                                <h4 className="limit-text">Limit Offer</h4>
                                <h3>Quality Airmchair</h3>
                            </div>
                            <Clock/>
                            <button className="buy-btn">
                                <Link to='/shop' style={{textDecoration: 'none', color: '#131e3b'}}>Visit store</Link>
                            </button>
                        </Grid>
                        <Grid item lg={4} md={6} >
                            <img src="https://github.com/codingwithmuhib/Maltimart-ecommerce/blob/start-up/src/assets/images/counter-timer-img.png?raw=true" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="best-sale">
                <Container>
                        <Grid container>
                            <Grid item lg={12}>
                                <h2 className="section-title">Best Sales </h2>
                            </Grid>
                            <Grid item lg={12}>
                                <ProductList/>
                            </Grid>
                        </Grid>
                </Container>
            </section>

           
        </Helmet>
    );
}

export default memo(Home);