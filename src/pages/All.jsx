
import { useState, useEffect } from "react";
import { Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AllSkeleton from "../components/UI/AllSkeleton";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData, deleteProductData } from "../features/All";
import Swal from 'sweetalert2'

function All() {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.all.value);
  console.log(allData);
  const dataLength = allData.length;
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const LoadingComponent = () => <div></div>;
  const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  const LoadableComponent = lazy(async () => {
    const time = await sleep(3000);
    return { default: LoadingComponent };
  });
  const handleDelete = (index) => {
    // console.log(index)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductData(index));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  // useEffect(() => {
  //     if(accessToken !== true){
  //         navigate('/login');
  //     }

  // },[])
  // useEffect(() => {
  //     dispatch(fetchAllData())
  // },[])
  return (
    <div className="all-products">
      <div className="add-products">
        {/* <Link to="/addproduct" style={{ textDecoration: "none" }}> */}
        <Link to={"/addproduct/"+dataLength} style={{ textDecoration: "none" }}>
          <Button variant="contained" className="add-btn">
            Add product
          </Button>
        </Link>
      </div>
      <Container>
        {allData.map((data, index) => (
                      <Suspense fallback={<AllSkeleton/>}>
                      <LoadableComponent/>
                      {sleep(1000) && (
                            <div className="all-contain" key={index}>
                            <div className="product-content">
                              <div className="product-img">
                                <img
                                  src={data.imageURL}
                                  alt=""
                                />
                              </div>
                              <div className="product-info">
                                <h2>{data.productName}</h2>
                                <h5>Quantity: {data.quantity}</h5>
                              </div>
                            </div>
                            <div className="product-action">
                              <Link
                                // to="/all/:id"
                                to={"/all/"+(data.id)}
                                style={{
                                  textDecoration: "none",
                                  color: "#131e3b",
                                  marginTop: "5px",
                                }}
                              >
                                <Button variant="contained" className="view-detail-btn">
                                  View Detail
                                </Button>
                                </Link>
                                <Link
                                  // to="/updateproduct"
                                  to={"/updateproduct/"+(index+1)}
                                  style={{
                                    textDecoration: "none",
                                    color: "#131e3b",
                                    marginLeft: "40px",
                                  }}
                                >
                                  <motion.span whileTap={{ scale: 1.2 }}>
                                    <i class="ri-edit-box-line"></i>
                                  </motion.span>
                                </Link>
                                <motion.span whileTap={{ scale: 1.2 }} onClick={() => handleDelete(index+1)}>
                                  <i class="ri-delete-bin-line"></i>
                                </motion.span>
                              
                            </div>
                          </div>
                      )}
                  </Suspense>
                ))}

       
     
      </Container>
    </div>
  );
}

export default All;
