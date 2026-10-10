const CART_KEY = 'parits-archives-cart';

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const cart = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(cart)) return [];

    const uniqueItems = new Map();
    cart.forEach((item) => {
      if (!item?.slug || uniqueItems.has(item.slug)) return;
      uniqueItems.set(item.slug, {
        slug: item.slug,
        name: item.name,
        price: item.price,
        priceValue: Number(item.priceValue ?? String(item.price).replace(/[^\d.]/g, '')) || 0,
        composer: item.composer,
        format: item.format,
      });
    });
    return Array.from(uniqueItems.values());
  } catch {
    return [];
  }
}

export function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('cartchange'));
}

export function addToCart(product) {
  const cart = getCart();
  if (cart.some((item) => item.slug === product.slug)) return cart;

  cart.push({
    slug: product.slug,
    name: product.name,
    price: product.price,
    priceValue: Number(product.price.replace(/[^\d.]/g, '')),
    composer: product.composer,
    format: product.format,
  });

  setCart(cart);
  return cart;
}

export function removeFromCart(slug) {
  const cart = getCart().filter((item) => item.slug !== slug);
  setCart(cart);
  return cart;
}

export function clearCart() {
  setCart([]);
}

export function getCartCount(items) {
  return items.length;
}
export function getCartSubtotal(items) {
  return items.reduce((total, item) => total + (item.priceValue || 0), 0);
}

export function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}
