import Skeleton from "react-loading-skeleton";

function AllSkeleton() {
    return ( 
        <div className="all-skeleton">
            <div className="left-all-skeleton">
                <Skeleton width={110} height={100}/>
            </div>
            <div className="right-all-skeleton">
                <Skeleton width={970} height={100}/>
            </div>
        </div>
     );
}

export default AllSkeleton;