import { Link } from 'react-router-dom';
import PageShell from '../../../../components/PageShell';
import InfoGrid from '../../../../components/InfoGrid';
import { collections } from '../../../../data/storeData';

export default function CollectionsPage() {
  return (
    <PageShell
      eyebrow="Collections"
      title="Archive collections"
      description="Browse themed product groups and story-led collections."
    >
      <InfoGrid
        items={collections}
        renderItem={(collection) => (
          <article key={collection} className="info-card">
            <span className="kicker">Series</span>
            <h3>{collection}</h3>
            <p>Curated items that share a visual and narrative identity.</p>
            <Link to={`/browse/collections/${collection.toLowerCase().replace(/\s+/g, '-')}`} className="secondary-button">
              Explore
            </Link>
          </article>
        )}
      />
    </PageShell>
  );
}
