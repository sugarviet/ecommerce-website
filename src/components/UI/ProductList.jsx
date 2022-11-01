import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Suspense, lazy } from "react";
import { ProductCard1 } from "./ProductCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const LoadingCompoent = () => (
    <div>
    </div>
  );

function ProductList() {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.home.value);


    const sleep = (ms) => {
        return new Promise((res) => setTimeout(res, ms));
      };
  const LoadableComponent = lazy(async () => {
    const time = await sleep(2600);
    return {default: LoadingCompoent};
  });
  return (
    <div className="product-list">
      <Grid container spacing={4}>
        {homeData.map((product, index) => (
        <Grid item lg={3} md={4} key={index}>
          <Suspense fallback={<ProductCardSkeleton />}>
            <LoadableComponent/>
            {sleep(100) && <ProductCard id={index} product={product}/>}
          </Suspense>
        </Grid>
        ))}
        
      </Grid>
    </div>

    // <div className="product-list">
    //      <Grid container spacing={4}>
    //         <Grid item lg={3} md={4}>
    //             <ProductCardSkeleton/>
    //         </Grid>
    //         <Grid item lg={3} md={4}>
    //             <ProductCard/>
    //         </Grid>
    //         <Grid item lg={3} md={4}>
    //             <ProductCard/>
    //         </Grid>
    //         <Grid item lg={3} md={4}>
    //             <ProductCard/>
    //         </Grid>
    //         <Grid item lg={3} md={4}>
    //             <ProductCard/>
    //         </Grid>
    //     </Grid>
    // </div>
  );
}

export default ProductList;
