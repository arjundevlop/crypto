import React from 'react';


const Container = ({data,addToCartFun}) => {
  return (
    <div className='container'>
    {data.map((item)=>{
        return (
          <div className="crypto-card">
        <img src={item.img} alt="coin-image" />
        <div className='crypto-name'>{item.name}</div>
        <div className='price'>$ {item.price}</div>
        <input type="number" id={item.id} />
        <button onClick={()=>addToCartFun(item)}>Add to Cart</button>
      </div>
        )
    })}

    </div>
  )
}

export default Container