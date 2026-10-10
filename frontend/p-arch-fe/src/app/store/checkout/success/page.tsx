import { Link } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';

export default function CheckoutSuccessPage() {
  return (
    <PageShell
      eyebrow="Order complete"
      title="Your demo order is complete."
      description="No payment was processed and no PDF was delivered. Checkout is ready to connect to payment and delivery services."
      children
      actions={
        <>
          <Link to="/account/orders" className="primary-button">
            View orders
          </Link>
          <Link to="/browse" className="secondary-button">
            Keep shopping
          </Link>
        </>
      }
    />
  );
}
