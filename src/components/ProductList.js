import React from 'react'
import '../App.css';

function ProductList({products,addToCart}) {
  return (
    <div className='flex'>
        {
            products.map((product)=>{
                return(
                    <div style={{ width: '33%' }}>
                        <div className='product-item' id={product.id}>
                            <img src={product.url} width="100%" />
                            <p>{product.name} | {product.category} </p>
                            <p> {product.seller} </p>
                            <p> Rs. {product.price} /-</p>
                            <button onClick={()=>addToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList