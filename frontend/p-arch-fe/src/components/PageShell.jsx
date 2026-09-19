export default function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
}) {
  return (
    <main className="page-shell">
      {(eyebrow || title || description || actions) && (
        <section className="hero-block">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
          {actions && <div className="cta-row">{actions}</div>}
        </section>
      )}

      {children}
    </main>
  );
}
