import React, { useState,useEffect } from 'react';
import Cart from './Components/Cart';
import Container from './Components/Container';
import "./App.css";

const App = () => {
  const cryptoData = [
    {"id":1,"name": "Bitcoin", "img":"https://i.ibb.co/3SMLrjs/bitcoin.png","price":25000},
    {"id":2,"name": "Dogecoin", "img":"https://i.ibb.co/WV5vNr2/dogecoin.png" ,"price":0.75},
    {"id":3,"name": "Ripple", "img":"https://i.ibb.co/ZMkV65r/ripple.png", "price":1.5}
  ];

  
  
  const[cartArr,setCartArr] = useState([]);
  // function to add coin to cart
  const addToCartFun = (coin) => {
    const existingCrypto = cartArr.find((item) => item.coin.id === coin.id); // checks if coin already exists in cart
    let currentQuantity = Number(document.getElementById(coin.id).value);
    

    
  
    if (existingCrypto!=undefined) {
      
      // case if coin already exists in cart 
      const updatedCartData = cartArr.map((item) => {
        if (item.coin.id === coin.id) {
          let updatedQuantity = (Number(item.quantity) + Number(currentQuantity)).toFixed(4); // updating quantity of coin
          let updatedAmount = (Number(coin.price)*Number(updatedQuantity)).toFixed(3); // updating amount 
          
          return { coin, quantity: updatedQuantity, amount :updatedAmount};
        }
        return item;
      });
      setCartArr([...updatedCartData]);
    } else { // if coin dont exists in the cart already
      
      const updatedCart = [...cartArr, { coin, quantity: currentQuantity, amount : (Number(coin.price)*Number(currentQuantity)).toFixed(3) }]; //updating cart with new values
      setCartArr([...updatedCart]);
    }
    
  };
    
    
  

  
  

  return (
    <div className='App'>

    <Container data={cryptoData} addToCartFun={addToCartFun}/>
      

      {cartArr.length==0 ? "" : <Cart cart={cartArr} />} 

      
    </div>
  )
  }
      

export default App