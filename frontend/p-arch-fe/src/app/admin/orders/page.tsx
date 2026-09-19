export default function AdminOrdersPage() {
  return (
    <section className="admin-shell">
      <h2>Orders</h2>
      <div className="card-grid">
        {[
          { id: "#1048", customer: "A. Jones", status: "Shipped" },
          { id: "#1047", customer: "R. Chen", status: "Processing" },
        ].map((order) => (
          <article key={order.id} className="info-card">
            <h3>{order.id}</h3>
            <p>{order.customer}</p>
            <p>Status: {order.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
