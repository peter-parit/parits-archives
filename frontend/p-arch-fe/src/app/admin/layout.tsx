import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const isAuthed = true;

  if (!isAuthed) {
    return (
      <main className="page-shell">
        <section className="hero-block">
          <p className="eyebrow">Admin access</p>
          <h1>Authentication required</h1>
          <p>Please sign in to continue.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell admin-shell">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Admin</p>
          <h1>Dashboard</h1>
        </div>
        <nav>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/customers">Customers</Link>
        </nav>
      </header>
      {children}
    </main>
  );
}
