import {TextField, Button} from '@mui/material'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from "react";
import {useDispatch} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import callAPI from '../utils/apiCaller';
import {updateProductData} from '../features/All';


function UpdateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [productName, setProductName] = useState();
    const [imageURL, setImageURL] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const productID = useParams();

    const handleUpdate = () => {
        dispatch(updateProductData({
            productName: productName,
            imageURL: imageURL,
            quantity: quantity,
            price: price,
            description: description,
            productID:productID.id
        }))
        navigate('/all');
    }
    useEffect(() => {
        callAPI(`all/${productID.id}`,'GET', null).then(res => {
            console.log(res.data);
            // setProduct(res.data)
            setProductName(res.data.productName);
            setImageURL(res.data.imageURL);
            setQuantity(res.data.quantity);
            setPrice(res.data.price)
            setDescription(res.data.description);
        })
    },[])
    return ( 
        <div className="update-product-section">
        <div className="update-product-form">
            <h1 style={{textAlign: 'center', color: '#131e3b'}}>Update product</h1>
            <TextField
            style={{width: '100%'}}
            label="Product's name"
            name='productName'
            type='text'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            InputLabelProps={{ shrink: true }}
            
            />
            <TextField
            style={{width: '100%', margin: '30px 0'}}
            label="Product's image" 
            value={imageURL}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setImageURL(e.target.value)}
            />
            <TextField
            style={{width: '100%'}}
            label="Product's price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            InputLabelProps={{ shrink: true }}
            />
            <TextField
            style={{width: '100%', margin: '30px 0'}}
            label="Product's quantity" 
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            InputLabelProps={{ shrink: true }}
            />
            <TextField
            style={{width: '100%'}}
            label="Product's description" 
            value={description}
            InputLabelProps={{ shrink: true }}
            onChange={e => setDescription(e.target.value)}
            />
            <div className='update-product-place'>
                <Button variant='contained' className='update-product-btn' onClick={handleUpdate}>Submit</Button>
            </div>
        </div>
    </div>
     );
}

export default UpdateProduct;