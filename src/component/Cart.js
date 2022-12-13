import React, { useEffect, useState } from "react";
import "../style/cart.css";

const Cart = ({ cart , setcart , handlechange }) => {
  const [price, setprice] = useState(0);

  const handleprice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setprice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
  }
  useEffect(()=>{ 
    handleprice();
  })
  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={()=>handlechange(item,+1)}>+</button>
            <span>{item.amount}</span> 
            <button onClick={()=>handlechange(item,-1)}>-</button>
          </div>    
          <div>
            <span>{item.price}</span>
            <button onClick={()=>handleRemove(item.id)}>remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total price of your cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
