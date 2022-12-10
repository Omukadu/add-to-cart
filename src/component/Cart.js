import React,{useState} from 'react'
import '../style/cart.css'

const Cart=({cart,setcart}) =>{
  const [price,setprice]= useState(0);
  return (
    <article>
    {
      cart.map((item)=>(
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div >
            <button>+</button>
            <button>{item.amount}</button>
            <button>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button>remove</button>
          </div>
        </div>
      ))
    }
    <div className='total'>
      <span >Total price of your cart</span>
      <span>Rs - {price}</span>
    </div>
    </article>
  )
}

export default Cart