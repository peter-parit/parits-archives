export default function FaqPage() {
  return (
    <main className="page-shell">
      <section className="hero-block">
        <p className="eyebrow">FAQ</p>
        <h1>Frequently asked questions</h1>
        <p>Common questions about ordering, fulfillment, and collector support.</p>
      </section>

      <section className="card-grid">
        {[
          ["How long does shipping take?", "Usually 3–7 business days depending on destination."],
          ["Do you offer international shipping?", "Yes, on select products and region-specific fulfillment."],
          ["Can I return a product?", "Select items are eligible for return within the stated policy window."],
        ].map(([question, answer]) => (
          <article key={question} className="info-card">
            <h3>{question}</h3>
            <p>{answer}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
