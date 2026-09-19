import { useParams } from 'react-router-dom';
import PageShell from '../../../../../components/PageShell';

export default function CollectionDetailPage() {
  const { slug } = useParams();

  return (
    <PageShell
      eyebrow="Collection"
      title={(slug ?? 'collection').replace(/-/g, ' ')}
      description="Highlights, notes, and featured items that belong to this collection."
    >
      <section className="card-grid">
        {[
          'Featured item 01',
          'Featured item 02',
          'Featured item 03',
        ].map((item) => (
          <article key={item} className="info-card">
            <span className="kicker">Included</span>
            <h3>{item}</h3>
            <p>Part of the curated group behind this collection story.</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
