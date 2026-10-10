import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell';
import {
  formatCurrency,
  getCart,
  getCartSubtotal,
  removeFromCart,
} from '../../../data/cart';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(getCart);

  const subtotal = getCartSubtotal(cartItems);

  return (
    <PageShell
      eyebrow="Cart"
      title="Your bag"
      description="Review your selected pieces before checkout."
      actions
    >
      {cartItems.length === 0 ? (
        <div className="empty-state">
          <div>
            <p>Your cart is empty.</p>
            <div className="cta-row">
              <Link to="/browse" className="primary-button">
                Browse pieces
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section className="cart-list">
            {cartItems.map((item) => (
              <article key={item.slug} className="list-card">
                <div>
                  <span className="kicker">Digital score</span>
                  <h3>{item.name}</h3>
                  <p className="cart-composer">{item.composer} · {item.format}</p>
                </div>

                <div className="cart-line-item">
                  <strong>{formatCurrency(item.priceValue || 0)}</strong>
                  <button
                    type="button"
                    className="remove-item-button"
                    onClick={() => setCartItems(removeFromCart(item.slug))}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="summary-card">
            <h3>Order summary</h3>
            <p>Subtotal: {formatCurrency(subtotal)}</p>
            <p>Digital delivery: Free</p>
            <strong>Total: {formatCurrency(subtotal)}</strong>
            <div className="cta-row">
              <Link to="/checkout" className="primary-button">
                Proceed to checkout
              </Link>
            </div>
          </aside>
        </>
      )}
    </PageShell>
  );
}
