import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", price: 20, qty: 1 },
    { id: 2, name: "Product B", price: 35, qty: 2 }
  ]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th><th>Price</th><th>Qty</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.qty}</td>
              <td>${item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Grand Total: ${total}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
