import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';
import { addToCart, getCart } from '../../../../data/cart';
import { featuredProducts } from '../../../../data/storeData';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = featuredProducts.find((item) => item.slug === slug);
  const [cartItems, setCartItems] = useState(getCart);
  const inCart = cartItems.some((item) => item.slug === slug);

  if (!product) {
    return (
      <PageShell
        eyebrow="Product"
        title="Piece not found"
        description="This score is not currently available in the catalog."
        actions={false}
        children
      />
    );
  }

  const handleAddToCart = () => {
    setCartItems(addToCart(product));
  };

  return (
    <PageShell
      eyebrow="Product"
      title={product.name}
      description="One digital score, delivered as a single PDF file for personal study and performance."
      actions={false}
    >
      <section className="product-detail-layout">
        <div className="product-detail-main">
          <div className="product-detail-header">
            <span className="kicker">Digital score</span>
            <h2>{product.name}</h2>
          </div>

          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-meta">
            <div>
              <span className="meta-label">Composer</span>
              <p>{product.composer}</p>
            </div>
            <div>
              <span className="meta-label">Difficulty</span>
              <p>{product.difficulty}</p>
            </div>
            <div>
              <span className="meta-label">Format</span>
              <p>{product.format}</p>
            </div>
          </div>

          <div className="product-detail-purchase">
            <div className="price-block">
              <span className="price-label">Price</span>
              <strong>{product.price}</strong>
            </div>

            {inCart ? (
              <Link to="/cart" className="primary-button">View cart</Link>
            ) : (
              <button type="button" className="primary-button" onClick={handleAddToCart}>
                Add to cart
              </button>
            )}
          </div>
        </div>

        <aside className="pdf-preview-panel" aria-label="PDF preview placeholder">
          <div className="pdf-preview-header">
            <span>PDF preview</span>
          </div>

          <div className="pdf-preview-surface">
            <div className="pdf-page" aria-hidden="true">
              <div className="pdf-lines" />
              <div className="pdf-lines short" />
              <div className="pdf-lines" />
              <div className="pdf-lines short" />
              <div className="pdf-lines" />
              <div className="pdf-lines short" />
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
