import React, { useState } from 'react'
import Header from '../Components/MainHeader/Header'
import { data } from '../SampleData'
import './Product.css'
import ProductDesc from '../Components/ProductDesc'
import { Link, useNavigate } from "react-router-dom";
function ProductList() {
    const navigate = useNavigate();

    return (
        <>
            <Header title={"App Title"} />
            <div className='MainDiv' >
                {
                    data.map((item, index) => (
                        <div key={index} className='ProductMainDesc'>
                            <ProductDesc item={item}
                                onPress={() => {
                                    navigate('/ProductList', { state: item });
                                }} />
                        </div>
                    ))
                }
            </div>


        </>
    )
}

export default ProductList