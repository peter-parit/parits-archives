import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell';
import InfoGrid from '../../../components/InfoGrid';

export default function CartPage() {
  const cartItems = [
    { name: 'Midnight Archive Box', qty: 'Qty: 1', price: '$79' },
  ];

  return (
    <PageShell
      eyebrow="Cart"
      title="Your bag"
      description="Review your selected pieces before checkout."
      actions
    >
      <InfoGrid
        items={cartItems}
        renderItem={(item: any) => (
          <article key={item.name} className="list-card">
            <h3>{item.name}</h3>
            <p>{item.qty}</p>
            <p>{item.price}</p>
          </article>
        )}
      />

      <aside className="summary-card">
        <h3>Order summary</h3>
        <p>Subtotal: $79</p>
        <p>Shipping: $12</p>
        <strong>Total: $91</strong>
        <div className="cta-row">
          <Link to="/checkout" className="primary-button">
            Proceed to checkout
          </Link>
        </div>
      </aside>
    </PageShell>
  );
}
