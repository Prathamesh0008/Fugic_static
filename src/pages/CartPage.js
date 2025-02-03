import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/contexts/CartContext"; // Import useCart
import "../styles/CartPage.css"; // Ensure you create this CSS file for styling

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Get cart state and functions from CartContext

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Article No.</th>
                <th>Chemical Name</th>
                <th>Purity</th>
                <th>CAS No.</th>
                <th>Formula</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.articleNo}</td>
                  <td>{item.chemicalName}</td>
                  <td>{item.purity}</td>
                  <td>{item.casNo}</td>
                  <td>{item.formula}</td>
                  <td>{item.selectedUnit}</td> {/* Adjust for selected unit */}
                  <td>{item.selectedPrice}</td> {/* Adjust for selected price */}
                  <td>
                    <button className="remove-btn" onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-actions">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
      <Link to="/products">
        <button className="back-btn">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartPage;
