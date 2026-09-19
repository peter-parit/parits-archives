import { Route, Routes } from 'react-router-dom'

import StoreHomePage from './app/store/page'
import BrowsePage from './app/store/browse/page'
import ProductDetailPage from './app/store/browse/[slug]/page'
import CollectionsPage from './app/store/browse/collections/page'
import CollectionDetailPage from './app/store/browse/collections/[slug]/page'
import CartPage from './app/store/cart/page'
import CheckoutPage from './app/store/checkout/page'
import CheckoutSuccessPage from './app/store/checkout/success/page'
import CheckoutCancelPage from './app/store/checkout/cancel/page'
import AboutPage from './app/store/info/about/page'
import FaqPage from './app/store/info/faq/page'
import ContactPage from './app/store/info/contact/page'
import LicensePage from './app/store/info/license/page'
import TermsPage from './app/legal/terms/page'
import PrivacyPage from './app/legal/privacy/page'
import AccountLibraryPage from './app/account/library/page'
import AccountOrdersPage from './app/account/orders/page'
import AccountSettingsPage from './app/account/settings/page'
import AdminLayout from './app/admin/layout'
import AdminProductsPage from './app/admin/products/page'
import AdminOrdersPage from './app/admin/orders/page'
import AdminCustomersPage from './app/admin/customers/page'

const routes = [
  { path: '/', element: <StoreHomePage /> },
  { path: '/browse', element: <BrowsePage /> },
  { path: '/browse/:slug', element: <ProductDetailPage /> },
  { path: '/browse/collections', element: <CollectionsPage /> },
  { path: '/browse/collections/:slug', element: <CollectionDetailPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/checkout/success', element: <CheckoutSuccessPage /> },
  { path: '/checkout/cancel', element: <CheckoutCancelPage /> },
  { path: '/info/about', element: <AboutPage /> },
  { path: '/info/faq', element: <FaqPage /> },
  { path: '/info/contact', element: <ContactPage /> },
  { path: '/info/license', element: <LicensePage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/account/library', element: <AccountLibraryPage /> },
  { path: '/account/orders', element: <AccountOrdersPage /> },
  { path: '/account/settings', element: <AccountSettingsPage /> },
  { path: '/admin/products', element: <AdminLayout><AdminProductsPage /></AdminLayout> },
  { path: '/admin/orders', element: <AdminLayout><AdminOrdersPage /></AdminLayout> },
  { path: '/admin/customers', element: <AdminLayout><AdminCustomersPage /></AdminLayout> },
]

function App() {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  )
}

export default App
