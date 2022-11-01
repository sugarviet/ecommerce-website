import { TextField, Button, FormControlLabel, Switch, Typography } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import {addProductData} from '../features/All'
import {useParams} from 'react-router-dom'

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const productID = useParams();
  console.log(+productID.id + 1)

  const formik = useFormik({
    initialValues: {
      productName: "",
      productImage: "",
      price: 0,
      quantity: 0,
      description: "",
      agree: false,
    },
    onSubmit: (values) => {
      dispatch(addProductData({id: +productID.id + 1, productName: productName, imageURL: productImage, price: price, quantity: quantity, description: description}))
      // dispatch(addProductData({productName: productName, imageURL: productImage, price: price, quantity: quantity, description: description}))
      // dispatch(addProduct({productName: productName, imageURL: productImage, price: price, quantity: quantity, description: description}))
      
      navigate('/all');
    },
    validationSchema: Yup.object({
        productName: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
        productImage: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
        price: Yup.number().integer().typeError("Please enter a valid number"),
        quantity: Yup.number().integer().typeError("Please enter a valid number"),
        description: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  useEffect(()=>{
    setProductName(formik.values.productName);
    setProductImage(formik.values.productImage);
    setPrice(formik.values.price);
    setQuantity(formik.values.quantity);
    setDescription(formik.values.description);
  },[formik.values])

  return (
    <div className="add-product-section">
      <div className="add-product-form">
        <form onSubmit={formik.handleSubmit}>
          <h1 style={{ textAlign: "center", color: "#131e3b" }}>Add product</h1>
          <TextField
            name="productName"
            style={{ width: "100%" }}
            label="Product's name"
            value={formik.values.productName}
            onChange={formik.handleChange}
          />
          {formik.errors.productName && (<Typography variant="caption" color="red">{formik.errors.productName}</Typography>)}
          <TextField
            name="productImage"
            style={{ width: "100%", margin: "30px 0"}}
            label="Product's image"
            value={formik.values.productImage}
            onChange={formik.handleChange}
          />
          {formik.errors.productImage && (
            <div className="error1">
          <Typography variant="caption" color="red">{formik.errors.productImage}</Typography>
          </div>
          )
          }
          <TextField
            name="price"
            style={{ width: "100%" }}
            label="Product's price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.errors.price && (<Typography variant="caption" color="red">{formik.errors.price}</Typography>)}
          <TextField
            name="quantity"
            style={{ width: "100%", margin: "30px 0" }}
            label="Product's quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
          {formik.errors.quantity && (
            <div className="error">
          <Typography variant="caption" color="red">{formik.errors.quantity}</Typography>
          </div>
          )}
          <TextField
            name="description"
            style={{ width: "100%" }}
            label="Product's description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description && (<Typography variant="caption" color="red">{formik.errors.description}</Typography>)}
            <div>
          <FormControlLabel
            control={<Switch/>}
            label="Agree to terms and conditions."
            name="agree"
            value={formik.values.agree} 
            onClick={formik.handleChange}
          />
          {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
          </div>
          <div className="add-product-place">
            <Button variant="contained" className="add-product-btn" type="submit">      
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
