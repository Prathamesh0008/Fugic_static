import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/contexts/CartContext";
import "../styles/CartPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useCurrency } from "../components/contexts/CurrencyContext";

const currencySymbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
  CNY: "¥",
};

const CartPage = () => {
  const { currency } = useCurrency();
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Your Cart", link: "" },
  ].filter(Boolean);

  const formatCartItems = () => {
    return cart.map((item) => ({
      productId: item.articleNo,
      productName: item.chemicalName,
      quantity: 1,
      price: item.selectedPrice,
    }));
  };

  const handleProceedToCheckout = () => {
    const orderData = {
      cartItems: formatCartItems(),
    };
    navigate("/checkout", { state: { orderData } });
  };

  return (
    <div className="cart-page-container">
      <Breadcrumb paths={breadcrumbPaths} />
      <h2>Your Cart</h2>

      {cart.length > 0 ? (
        <>
          <div className="cart-table-wrapper">
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
                {cart.map((item, index) => {
                  console.log("Cart Item:", item);
                  console.log("Item Currency:", item.currency);
                  console.log("Global Currency Context:", currency);

                  return (
                    <tr key={index}>
                      <td>{item.articleNo}</td>
                      <td>{item.chemicalName}</td>
                      <td>{item.purity}</td>
                      <td>{item.casNo}</td>
                      <td>{item.formula}</td>
                      <td>{item.selectedUnit}</td>
                      <td>
                        {item.currency && currencySymbols[item.currency]
                          ? `${currencySymbols[item.currency]} ${item.selectedPrice}`
                          : `${currencySymbols[currency] || currency} ${item.selectedPrice}`}
                      </td>
                      <td>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="cart-mobile-view">
            {cart.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <p><strong>Article No.:</strong> {item.articleNo}</p>
                <p><strong>Chemical Name:</strong> {item.chemicalName}</p>
                <p><strong>Purity:</strong> {item.purity}</p>
                <p><strong>CAS No.:</strong> {item.casNo}</p>
                <p><strong>Formula:</strong> {item.formula}</p>
                <p><strong>Unit:</strong> {item.selectedUnit}</p>
                <p>
                  <strong>Price:</strong>{" "}
                  {item.currency && currencySymbols[item.currency]
                    ? `${currencySymbols[item.currency]} ${item.selectedPrice}`
                    : `${currencySymbols[currency] || currency} ${item.selectedPrice}`}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
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
