import React from 'react'
import '../style/card.css'
function card({item , Hc}) {
  const {title,author,price,img}=item;
  return (
    <div className='cards'>
    <div className="image_box">
      <img src={img} alt="image" />
    </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}rs</p>
          <button onClick={()=>Hc(item)}>Add to cart</button>
        </div>
    </div>
  )
}
export default card