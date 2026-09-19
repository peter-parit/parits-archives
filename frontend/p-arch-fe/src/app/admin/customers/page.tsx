export default function AdminCustomersPage() {
  return (
    <section className="admin-shell">
      <h2>Customers</h2>
      <div className="card-grid">
        {[
          { name: "A. Jones", total: "$180" },
          { name: "R. Chen", total: "$240" },
          { name: "L. Gomez", total: "$95" },
        ].map((customer) => (
          <article key={customer.name} className="info-card">
            <h3>{customer.name}</h3>
            <p>Total spend: {customer.total}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
