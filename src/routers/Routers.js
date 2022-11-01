import { Route, Routes, Navigate} from "react-router-dom";


import Home from "../pages/Home";
import All from "../pages/All";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import AllDetail from "../pages/AllDetail";
import AboutUs from "../pages/AboutUs";



function Routers() {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to= '/home'/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/all" element={<All/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/addproduct/:id" element={<AddProduct/>}/>
            <Route path="/updateproduct/:id" element={<UpdateProduct/>}></Route>
            <Route path="/home/:id" element={<ProductDetail/>}/>
            <Route path="/all/:id" element={<AllDetail/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>       
     );
}

export default Routers;
