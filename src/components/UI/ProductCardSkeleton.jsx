import Skeleton from "react-loading-skeleton";

function ProductCardSkeleton() {
    return ( 
        <div className="product-card-skeleton">
            <div className="product-card-top">
                <Skeleton width={250} height={250}/>
            </div>
            <div className="product-card-bottom">
                <Skeleton width={250} count={3} height={30} style={{marginBottom: '10px'}}/>
            </div>
        </div>
     );
}

export default ProductCardSkeleton;