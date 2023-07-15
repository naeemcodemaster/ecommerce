import React, { useState,useEffect } from 'react'
import axios from 'axios';
const AddProduct = () => {
    const [itemname,setName] = useState("");
    const [itemprice,setPrice] = useState();
    const [itemimage,setImage] = useState("");
    const [itemstatus,setStatus] = useState("");
    const [products,setProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            // .then(res => console.log(typeof(res.data)))
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    const handlesubmit = (e) => {
        e.preventDefault();
        const id = products[products.length - 1].id + 1
        axios.post('http://localhost:3000/users', { id: id, name: itemname, price: Number(itemprice),image:itemimage,status:itemstatus })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        location.reload()
    }
    return (
        <>
            <br/>
            <form onSubmit={handlesubmit}>
                <input type='text' placeholder='Enter Name' onChange={e => setName(e.target.value)} />
                <input type='number' placeholder='Enter Price' onChange={e => setPrice(e.target.value)} />
                <input type='text' placeholder='Enter Image Url' onChange={e => setImage(e.target.value)} />
                <input type='text' placeholder='Enter Status' onChange={e => setStatus(e.target.value)} />
                <button>Add Product</button>
            </form>

        </>
    )
}

export default AddProduct