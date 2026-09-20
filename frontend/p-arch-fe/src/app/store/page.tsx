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
      children
    />

  );
}
