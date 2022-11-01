import Skeleton from "react-loading-skeleton";


function ProductDetailSkeleton() {
    return ( 
        <div className="product-detail-skeleton">
            <div className="left-product-detail-skeleton">
                <Skeleton width={400} height={350}/>
            </div>
            <div className="right-product-detail-skeleton">
                <Skeleton width={800} height={45} count={5} style={{marginBottom: '25px'}}/>
            </div>
        </div>
     );
}

export default ProductDetailSkeleton;