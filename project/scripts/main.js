// Product data (objects + array methods used)
const products = [
    { id: 'fc-1888', name: 'Flux Hoodie', price: 64.99, img: '../images/flux-hoodie.jpg' },
    { id: 'fc-2050', name: 'Power Laces Sneakers', price: 89.00, img: '../images/power-laces-sneakers.jpg' },
    { id: 'fs-1987', name: 'Time Circuits Jacket', price: 120.5, img: '../images/time-circuits-jacket.jpg' },
    { id: 'ac-2000', name: 'Low Voltage Tee', price: 29.99, img: '../images/low-voltage-tee.jpg' },
    { id: 'jj-1969', name: 'Warp Equalizer Cap', price: 22.0, img: '../images/warp-equalizer-cap.jpg' }
];

// Render products grid (uses template literals exclusively)
function renderProductsGrid(containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = products.map(p => productCardHTML(p)).join('');
    // attach event listeners to add buttons
    container.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = e.currentTarget.dataset.id;
            addToCart(id);
        });
    });
}

// Render full products list (for products page)
function renderProductsList() {
    const container = document.getElementById('productsList');
    if (!container) return;
    container.innerHTML = products.map(p => {
        return `
      <article class="product-card">
        <img loading="lazy" src="${p.img}" alt="${p.name}">
        <h4 class="product-title">${p.name}</h4>
        <p class="price">${formatPrice(p.price)}</p>
        <div class="product-actions">
          <button class="btn add-btn" data-id="${p.id}">Add</button>
          <button class="btn secondary" data-id="${p.id}" onclick="showDetails('${p.id}')">Details</button>
        </div>
      </article>
    `;
    }).join('');
    // wire up add buttons
    container.querySelectorAll('.add-btn').forEach(btn => btn.addEventListener('click', e => addToCart(e.currentTarget.dataset.id)));
}

// Create product HTML for grid
function productCardHTML(p) {
    return `
    <article class="product-card">
      <img loading="lazy" src="${p.img}" alt="${p.name}">
      <h4 class="product-title">${p.name}</h4>
      <p class="price">${formatPrice(p.price)}</p>
      <div class="product-actions">
        <button class="btn add-btn" data-id="${p.id}">Add</button>
        <button class="btn secondary" onclick="showDetails('${p.id}')">Details</button>
      </div>
    </article>
  `;
}

// Format price helper
function formatPrice(value) {
    return `$${value.toFixed(2)}`;
}

// Add to cart (localStorage) — demonstrates conditional branching and storage
function addToCart(id) {
    let count = parseInt(localStorage.getItem('cartCount'), 10);
    if (Number.isNaN(count)) count = 0;
    // check if id exists
    const exists = products.some(p => p.id === id);
    if (!exists) {
        alert('Product not found.');
        return;
    }
    count += 1;
    localStorage.setItem('cartCount', count);
    updateCartUI();
}

// Update cart count UI in multiple places
function updateCartUI() {
    const count = parseInt(localStorage.getItem('cartCount'), 10) || 0;
    const els = document.querySelectorAll('#cartCount, #cartCountTop');
    els.forEach(el => el.textContent = count);
}

// Simple details modal (placeholder) demonstrating DOM modification
function showDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    alert(`${product.name} — ${formatPrice(product.price)}`);
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    renderProductsGrid('productsGrid');
    renderProductsList();
    updateCartUI();
});

// expose some functions for inline handlers
window.showDetails = showDetails;
window.addToCart = addToCart;
