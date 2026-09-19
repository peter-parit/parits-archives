import PageShell from '../../../components/PageShell';
import InfoGrid from '../../../components/InfoGrid';

export default function AccountOrdersPage() {
  const orders = [
    { id: '#1048', status: 'Shipped' },
    { id: '#1042', status: 'Processing' },
  ];

  return (
    <PageShell
      eyebrow="Account"
      title="Orders"
      description="Track your purchases and shipment status."
    >
      <InfoGrid
        items={orders}
        renderItem={(order) => (
          <article key={order.id} className="info-card">
            <h3>{order.id}</h3>
            <p>Status: {order.status}</p>
          </article>
        )}
      />
    </PageShell>
  );
}
