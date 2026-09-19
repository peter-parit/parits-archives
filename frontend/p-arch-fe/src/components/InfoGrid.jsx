export default function InfoGrid({ items, renderItem }) {
  return <section className="card-grid">{items.map(renderItem)}</section>;
}
