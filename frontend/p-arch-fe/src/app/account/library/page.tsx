import PageShell from '../../../components/PageShell';
import InfoGrid from '../../../components/InfoGrid';

export default function AccountLibraryPage() {
  const items = ['Signal Echo Set', 'Midnight Archive Box', 'Collector Ticket Pack'];

  return (
    <PageShell
      eyebrow="Account"
      title="Library"
      description="Your purchased and downloaded archive items."
    >
      <InfoGrid
        items={items}
        renderItem={(item) => (
          <article key={item} className="info-card">
            <h3>{item}</h3>
            <p>Available for instant access.</p>
          </article>
        )}
      />
    </PageShell>
  );
}
