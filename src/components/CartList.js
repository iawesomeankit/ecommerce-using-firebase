import React from 'react'
import '../App.css'
function CartList({cart,addQuantity,removeQuantity,tprice}) {
  return (
    <div className='flex'>
        {
            cart.map((item)=>{
                return(
                    <div style={{ width: '33%' }}>
                        <div className='product-item' id={item.id}>
                            <img src={item.url} width="100%" />
                            <p>{item.name} | {item.category} </p>
                            <p> {item.seller} </p>
                            <p> Rs. {item.price} /-</p>
                            <p> Quantity: {item.quantity}</p>
                            <button onClick={()=>addQuantity(item)}>+</button>
                            <button onClick={()=>removeQuantity(item)}>-</button>
                        </div>
                    </div>
                )
            })
        }

        <h1><b>Total price:</b> <br/>{tprice}</h1>
    </div>
  )
}

export default CartList