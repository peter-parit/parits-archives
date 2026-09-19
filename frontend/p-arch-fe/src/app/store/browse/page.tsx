import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell';
import InfoGrid from '../../../components/InfoGrid';
import { featuredProducts, filterOptions } from '../../../data/storeData';

export default function BrowsePage() {
  return (
    <PageShell
      eyebrow="Catalog"
      title="Browse the archive catalog"
      description="Search by format, rarity, and collection themes."
      actions
    >
      <div className="filter-row">
        <input aria-label="Search products" placeholder="Search products" />
        <select aria-label="Sort by">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
        {filterOptions.map((filter) => (
          <button key={filter} type="button" className="link-button">
            {filter}
          </button>
        ))}
      </div>

      <InfoGrid
        items={featuredProducts}
        renderItem={(item: any) => (
          <article key={item.name} className="info-card">
            <span className="kicker">Limited</span>
            <h3>{item.name}</h3>
            <p>High-demand archive content prepared for collectors.</p>
            <div className="meta-row">
              <strong>{item.price}</strong>
              <Link to={`/browse/${item.slug}`} className="secondary-button">
                View details
              </Link>
            </div>
          </article>
        )}
      />
    </PageShell>
  );
}
