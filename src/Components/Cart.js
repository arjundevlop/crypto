import React from 'react'

const Cart = ({cart}) => {
  let totalAmount = cart.reduce((acc, item) => Number(acc) + Number(item.amount), 0); //calculating total cart amount
  
  return (
    <div className="cart">
        <h2>My Cart</h2>
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <td>Coin</td>
                  <td>Quantity</td>
                  <td>Amount</td>
                </tr>
                </thead>
                <tbody>
                  {cart.map((item)=>{
                    return (
                      <tr>
                        <td>{item.coin.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.amount}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan={2}>Total</td>
                    <td>{totalAmount}</td>
                  </tr>
                </tbody>
              
            </table>
          </div>
        
      </div>
  )
}

export default Cart