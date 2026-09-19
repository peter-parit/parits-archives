import { Link } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';

export default function CheckoutCancelPage() {
  return (
    <PageShell
      eyebrow="Checkout canceled"
      title="Your order was not completed."
      description="No charge has been made, and your cart is still available for review."
      actions={
        <>
          <Link to="/cart" className="primary-button">
            Return to cart
          </Link>
          <Link to="/browse" className="secondary-button">
            Continue shopping
          </Link>
        </>
      }
    />
  );
}
