import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageShell from '../../../components/PageShell';
import { clearCart, formatCurrency, getCart, getCartSubtotal } from '../../../data/cart';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [cartItems] = useState(getCart);

  const subtotal = getCartSubtotal(cartItems);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    clearCart();
    navigate('/checkout/success');
  };

  return (
    <PageShell
      eyebrow="Checkout"
      title="Complete your order"
      description="Add your contact details for this digital order."
      actions
    >
      {cartItems.length === 0 ? (
        <div className="empty-state">
          <div>
            <p>Your cart is empty.</p>
            <div className="cta-row">
              <Link to="/browse" className="primary-button">Browse pieces</Link>
            </div>
          </div>
        </div>
      ) : (
        <form className="checkout-layout" onSubmit={handleSubmit}>
          <section className="checkout-details">
            <h2>Contact details</h2>
            <label className="form-field">
              <span>Full name</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label className="form-field">
              <span>Email for order updates</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <p className="checkout-note">
              This is a checkout prototype. Payment and PDF delivery are not connected yet.
            </p>
          </section>

          <aside className="summary-card">
            <h2>Order summary</h2>
            <ul className="checkout-items">
              {cartItems.map((item) => (
                <li key={item.slug}>
                  <span>{item.name}</span>
                  <strong>{formatCurrency(item.priceValue || 0)}</strong>
                </li>
              ))}
            </ul>
            <p>Digital delivery: Free</p>
            <strong>Total due: {formatCurrency(subtotal)}</strong>
            <button type="submit" className="primary-button">Place demo order</button>
          </aside>
        </form>
      )}
    </PageShell>
  );
}
