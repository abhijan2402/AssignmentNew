import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Components/MainHeader/Header';
import './Product.css'
function ProductInfo({ }) {
    const location = useLocation();
    console.log(location?.state, "Test");
    const [itemDesc, setItemDesc] = useState(location?.state)
    return (
        <>
            <Header title={"Product Description"} />
            <div className='ProductDeepInfo'>
                <div>{itemDesc?.Name}</div>
                <div> Price : {itemDesc?.Price}</div>
                <div>{itemDesc?.Description}</div>
            </div>
        </>
    )
}

export default ProductInfo