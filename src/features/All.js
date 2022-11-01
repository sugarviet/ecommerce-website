import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callAPI from '../utils/apiCaller';

const allSlice = createSlice({
    name: 'all',
    initialState: {value: []},
    reducers: {
        addProduct:(state,  action) =>{
            console.log(action.payload)
            callAPI("all", "POST", action.payload).then(res => console.log(res))
        }
    },
    extraReducers:builder => {
        builder.addCase(fetchAllData.pending, (state, action) =>{
            console.log(action.payload)
        }).addCase(fetchAllData.fulfilled, (state,action) => {
            state.value = action.payload;
        }).addCase((addProductData.fulfilled), (state,action)=>{
            console.log(action.payload)
            state.value.push(action.payload)
        }).addCase((deleteProductData.fulfilled), (state, action)=>{
            state.value =  state.value.filter(product => 
                product.id != action.payload
            )  
            
            
        }).addCase((updateProductData.fulfilled), (state,action) => {
            state.value.map(product => {
                if(product.id == action.payload.productID){
                    product.productName = action.payload.productName;
                    product.imageURL = action.payload.imageURL;
                    product.price = action.payload.price;
                    product.quantity = action.payload.quantity;
                    product.description = action.payload.description;
                }
            })
        })
    }
})

export const fetchAllData = createAsyncThunk('home/fetchAllData', async()=>{
    const res = await callAPI('all', 'GET', null)

    return res.data;
})
export const addProductData = createAsyncThunk('home/addProductData', async(data)=>{
    console.log(data)
    const res = await callAPI('all', 'POST', data).then(res => console.log(res.data))

    return data;
})
export const deleteProductData = createAsyncThunk('home/deleteProductData', async(id)=>{
   const res = await callAPI(`all/${id}`, 'DELETE', null).then(res => console.log(res))

    return id;
})
export const updateProductData = createAsyncThunk('home/updateProductData', async(data)=>{
    const res = await callAPI(`all/${data.productID}`, 'PUT', {
        productName: data.productName,
        imageURL: data.imageURL,
        price: data.price,
        quantity: data.quantity,
        description: data.description

    }).then(res => console.log(res));

    return data;
})
export default allSlice.reducer;
export const {addProduct} = allSlice.actions;