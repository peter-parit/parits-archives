export default function AdminProductsPage() {
  return (
    <section className="admin-shell">
      <div className="admin-actions">
        <h2>Products</h2>
        <button type="button" className="primary-button">
          New product
        </button>
      </div>

      <div className="card-grid">
        {[
          "Midnight Archive Box",
          "Signal Echo Set",
          "Collector Ticket Pack",
        ].map((product) => (
          <article key={product} className="info-card">
            <h3>{product}</h3>
            <p>Inventory and catalog management view.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
