import { useParams } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';

export default function ProductDetailPage() {
  const { slug } = useParams();

  return (
    <PageShell
      eyebrow="Product"
      title={(slug ?? 'product').replace(/-/g, ' ')}
      description="Detailed information about this item, including edition notes, materials, and availability."
      actions
    >
      <section className="card-grid">
        <article className="panel">
          <h3>Overview</h3>
          <p>
            This product detail page is the canonical view for a specific archive item,
            bundle, or collector edition.
          </p>
        </article>

        <article className="panel">
          <h3>Pricing</h3>
          <p>$89</p>
          <button type="button" className="primary-button">
            Add to cart
          </button>
        </article>
      </section>
    </PageShell>
  );
}
