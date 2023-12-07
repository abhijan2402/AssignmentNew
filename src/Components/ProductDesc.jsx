import React, { useState } from 'react'
import '../Screens/Product.css'
import { TestDemoText } from '../SampleData'
function ProductDesc({ item, onPress, onClick }) {
    const [ShowData, setShowData] = useState(false)

    return (
        <>
            <h3>{item?.Name}</h3>
            <p>{item?.Description} <span className='seeMoreBtn' onClick={() => { setShowData(!ShowData) }}>{ShowData ? " show less" : "show more"}</span></p>
            <div className='PriceBtnDiv'>
                <h3>Price : {item?.Price}</h3>
                <button onClick={onPress} className='Btn'>See Product</button>
            </div>
            {
                ShowData ? <div>{TestDemoText}</div> : null
            }
        </>
    )
}

export default ProductDesc