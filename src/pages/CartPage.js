import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { useCart } from "../components/contexts/CartContext"; // Import useCart
import "../styles/CartPage.css"; // Ensure you create this CSS file for styling
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Get cart state and functions from CartContext
  const navigate = useNavigate(); // Use useNavigate for redirect
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Your Cart", link: "" },
  ].filter(Boolean);

  const formatCartItems = () => {
    return cart.map((item) => ({
      productId: item.articleNo, // Use appropriate fields
      productName: item.chemicalName,
      quantity: 1, // Assuming 1 item per entry or whatever the logic is
      price: item.selectedPrice,
    }));
  };

  const handleProceedToCheckout = () => {
    const orderData = {
      cartItems: formatCartItems(),
    };

    // Navigate to CheckoutPage with order data
    navigate("/checkout", { state: { orderData } });
  };

  return (
    <div className="cart-page-container">
      <Breadcrumb paths={breadcrumbPaths} />
      <h2>Your Cart</h2>

      {cart.length > 0 ? (
        <>
          {/* Regular Table for Large Screens */}
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
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.articleNo}</td>
                    <td>{item.chemicalName}</td>
                    <td>{item.purity}</td>
                    <td>{item.casNo}</td>
                    <td>{item.formula}</td>
                    <td>{item.selectedUnit}</td>
                    <td>{item.selectedPrice}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Responsive Card View for Small Screens */}
          <div className="cart-mobile-view">
            {cart.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <p>
                  <strong>Article No.:</strong> {item.articleNo}
                </p>
                <p>
                  <strong>Chemical Name:</strong> {item.chemicalName}
                </p>
                <p>
                  <strong>Purity:</strong> {item.purity}
                </p>
                <p>
                  <strong>CAS No.:</strong> {item.casNo}
                </p>
                <p>
                  <strong>Formula:</strong> {item.formula}
                </p>
                <p>
                  <strong>Unit:</strong> {item.selectedUnit}
                </p>
                <p>
                  <strong>Price:</strong> {item.selectedPrice}
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
