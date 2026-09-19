import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell';
import InfoGrid from '../../components/InfoGrid';
import { storeHighlights } from '../../data/storeData';

export default function StoreHomePage() {
  return (
    <PageShell
      eyebrow="Parit&apos;s Archives"
      title="Curated pieces for collectors, gamers, and archivists."
      description="Discover rare editions, digital collectibles, and limited-run artifacts."
      actions={
        <Link className="primary-button" to="/browse">
          Browse catalog
        </Link>
      }
    >
      <InfoGrid
        items={storeHighlights}
        renderItem={(item: any) => (
          <article key={item.title} className="info-card">
            <span className="kicker">Store</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        )}
      />
    </PageShell>
  );
}
