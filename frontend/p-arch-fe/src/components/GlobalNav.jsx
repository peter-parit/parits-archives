import { Link, NavLink } from 'react-router-dom';

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5.5h2.2l1.5 7.5h9.3l2.1-6.5H7.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.2" cy="17.8" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.6" cy="17.8" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.2 18.1c1.3-2.7 4-4.1 6.8-4.1s5.5 1.4 6.8 4.1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function GlobalNav() {
  return (
    <header className="global-nav">
      <div className="nav-inner">
        <Link to="/" className="brand-mark" aria-label="Parit&apos;s Archives home">
          Parit's Archives
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/browse" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Browse
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) => `nav-link nav-icon-link ${isActive ? 'active' : ''}`} aria-label="Cart">
            <span className="nav-icon"><CartIcon /></span>
            <span className="nav-label">Cart</span>
          </NavLink>

          <NavLink to="/account/orders" className={({ isActive }) => `nav-link nav-icon-link ${isActive ? 'active' : ''}`} aria-label="Account">
            <span className="nav-icon"><UserIcon /></span>
            <span className="nav-label">Account</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
