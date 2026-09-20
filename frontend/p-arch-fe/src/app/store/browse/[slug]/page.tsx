import { useParams } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';
import EmptyShell from '../../../../components/EmptyShell';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const title = (slug ?? 'product').replace(/-/g, ' ');

  return (
    <EmptyShell>
      <section className="product-detail-layout">
        <div className="product-detail-main">
          <div className="product-detail-header">
            <span className="kicker">Digital score</span>
            <h2>{title}</h2>
          </div>

          <p className="product-detail-description">
            A carefully selected piano work presented as a single downloadable PDF. This edition is
            intended for personal study and performance practice, with clean engraving and readable
            notation for focused rehearsal.
          </p>

          <div className="product-detail-meta">
            <div>
              <span className="meta-label">Composer</span>
              <p>A. Mercer</p>
            </div>
            <div>
              <span className="meta-label">Difficulty</span>
              <p>Intermediate</p>
            </div>
          </div>

          <div className="product-detail-purchase">
            <div className="price-block">
              <span className="price-label">Price</span>
              <strong>$24</strong>
            </div>

            <button type="button" className="primary-button">
              Add to cart
            </button>
          </div>
        </div>

        <aside className="pdf-preview-panel" aria-label="PDF preview placeholder">
          <div className="pdf-preview-header">
            <span>PDF preview</span>
          </div>
          <div className="pdf-preview-surface">
            <div className="pdf-page">
              <div className="pdf-lines" />
              <div className="pdf-lines short" />
              <div className="pdf-lines" />
              <div className="pdf-lines short" />
            </div>
          </div>
        </aside>
      </section>
    </EmptyShell>
  );
}
