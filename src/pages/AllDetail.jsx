import {useState, useEffect} from 'react';
import callAPI from '../utils/apiCaller';
import { Suspense, lazy } from "react";
import {useParams} from 'react-router-dom'
import {Container, Grid, Button} from '@mui/material'
import ProductDetailSkeleton from '../components/UI/ProductDetailSkeleton';

function AllDetail() { 
        const [product, setProduct] = useState({});
        const productID = useParams();
        
        const LoadingComponent = () => (
            <Grid container spacing={2}>
            <Grid item lg={4}>
                <div className="product-detail-img">
                    <img src={product.imageURL} alt="img" />
                </div>
            </Grid>
            <Grid item lg={8}>
                <div className='product-detail-content'>
                    <h2>{product.productName}</h2>
                    <div className='rating'>
                        <div className='rating-star'>
                        <i class="ri-star-fill checked"></i>
                        <i class="ri-star-fill checked"></i>
                        <i class="ri-star-fill checked"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <div className='rating-score'><p>({product.rating} ratings)</p></div>
                    </div>
                    <div className='price'>
                        <h3>${product.price}</h3>
                    </div>
                    <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus hic beatae placeat rerum error porro, labore repellat provident sapiente animi, mollitia sit autem eveniet alias rem dolor possimus voluptatem.</p>
    
                    <Button variant='contained' className='add-to-cart-btn'>Add to cart</Button>
                </div>
            </Grid>
        </Grid>
          );
          const sleep = (ms) => {
            return new Promise((res) => setTimeout(res, ms));
          };
        const LoadableComponent = lazy(async () => {
            const time = await sleep(3200);
            return {default: LoadingComponent};
      });
        useEffect(() => {
            callAPI(`all/${productID.id}`,'GET', null).then(res => {
                console.log(res);
                setProduct(res.data)
            })
        },[])
        return ( 
            <div className='product-detail-section'>
                <Container>
                   
                    <Suspense fallback={<ProductDetailSkeleton />}>
                        <LoadableComponent/> 
                    </Suspense>
                </Container>
            </div>
         );
     
}

export default AllDetail;