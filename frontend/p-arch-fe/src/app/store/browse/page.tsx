import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell';
import InfoGrid from '../../../components/InfoGrid';
import { featuredProducts, filterOptions } from '../../../data/storeData';
import EmptyShell from '../../../components/EmptyShell';

export default function BrowsePage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All items');

  const visibleProducts = useMemo(() => {
    return featuredProducts.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.composer.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        activeFilter === 'All items' || item.difficulty === activeFilter;

      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <EmptyShell>
      <div className="filter-row">
        <input
          aria-label="Search products"
          placeholder="Search pieces"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <select aria-label="Sort by" defaultValue="Featured">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        {filterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`link-button ${activeFilter === filter ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="empty-state">
          <p>No pieces match your search.</p>
        </div>
      ) : (
        <InfoGrid
          items={visibleProducts}
          renderItem={(item: any) => (
            <article key={item.name} className="info-card product-card">
              <div className="card-visual" aria-hidden="true">
                <span>{item.format}</span>
              </div>

              <div className="card-copy">
                <span className="kicker">Digital score</span>
                <h3>{item.name}</h3>
                <p className="composer-line">{item.composer}</p>
                <p>{item.description}</p>

                <div className="meta-row">
                  <Link to={`/browse/${item.slug}`} className="secondary-button">
                    View details
                  </Link>
                </div>
              </div>
            </article>
          )}
        />
      )}
    </EmptyShell>
  );
}
