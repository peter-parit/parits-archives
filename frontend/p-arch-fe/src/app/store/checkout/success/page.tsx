import { Link } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';

export default function CheckoutSuccessPage() {
  return (
    <PageShell
      eyebrow="Order complete"
      title="Thank you for your purchase."
      description="Your order has been confirmed and a receipt has been sent to your inbox."
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
      children
    />
  );
}
