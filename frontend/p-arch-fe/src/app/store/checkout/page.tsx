import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell';

export default function CheckoutPage() {
  return (
    <PageShell
      eyebrow="Checkout"
      title="Complete your order"
      description="Enter your contact and shipping details to finalize purchase."
    >
      <section className="card-grid">
        <article className="panel">
          <h3>Customer details</h3>
          <div className="filter-row">
            <input placeholder="Full name" />
            <input placeholder="Email" />
          </div>
          <div className="filter-row">
            <input placeholder="Address line 1" />
            <input placeholder="City" />
          </div>
        </article>

        <aside className="summary-card">
          <h3>Payment</h3>
          <p>Card ending in 4242</p>
          <p>Shipping: $12</p>
          <strong>Total due: $91</strong>
          <Link to="/checkout/success" className="primary-button">
            Place order
          </Link>
        </aside>
      </section>
    </PageShell>
  );
}
