const products = [
  // -------- CHIFFON  --------
  {
    id: 1,
    name: "Airy Matte Chiffon",
    category: "chiffon",
    price: 130,
    tag: "Best Seller",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/3f/bf/10/3fbf10a06fa4b6f55f37a885b32282db.jpg",
    description: "Featherlight matte chiffon that drapes gracefully with zero shine. Breathable enough for sunny Cairo afternoons.",
    specs: ["190 × 75 cm", "Matte Georgette", "1–2 Pins"]
  },
  {
    id: 2,
    name: "Cairo Breeze Chiffon",
    category: "chiffon",
    price: 135,
    tag: "Daily Staple",
    rating: "4.8",
    image: "https://i.pinimg.com/736x/97/35/aa/9735aa2348e3c63f9a64b280c1df52d1.jpg",
    description: "Ultra-soft woven chiffon with clean hemmed edges for effortless everyday layering.",
    specs: ["195 × 75 cm", "Soft Chiffon", "Light Drape"]
  },
  {
    id: 3,
    name: "Textured Crepe Chiffon",
    category: "chiffon",
    price: 140,
    tag: "Non-Slip",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/e4/55/f3/e455f346d256cb7b58ebffd97500c1b8.jpg",
    description: "Subtle crepe grain adds natural grip so your wrap stays neat from morning commute to dinner.",
    specs: ["190 × 75 cm", "Crepe Chiffon", "High Grip"]
  },
  {
    id: 4,
    name: "Sandstone Flow Chiffon",
    category: "chiffon",
    price: 145,
    tag: "Trending",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/34/6a/9a/346a9abcf11ddd2630dc9f8078079d9a.jpg",
    description: "Generously sized chiffon shawl with fluid movement and rich earthy pigment.",
    specs: ["200 × 75 cm", "Double Chiffon", "90% Opaque"]
  },
  {
    id: 5,
    name: "Double-Layer Georgette",
    category: "chiffon",
    price: 150,
    tag: "Extra Coverage",
    rating: "4.8",
    image: "https://i.pinimg.com/736x/2e/6b/00/2e6b00c890744f3cd4478225e3821775.jpg",
    description: "Tightly woven georgette chiffon offering fuller opacity without adding extra bulk.",
    specs: ["190 × 75 cm", "Dense Weave", "Opaque"]
  },
  {
    id: 6,
    name: "Pearl Hem Chiffon",
    category: "chiffon",
    price: 155,
    tag: "Feminine",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/cd/90/e5/cd90e5a3f5fb35a4a425f83eea680977.jpg",
    description: "Classic chiffon finished with micro-stitched borders that frame your face cleanly.",
    specs: ["190 × 75 cm", "Fine Chiffon", "Soft Touch"]
  },
  {
    id: 7,
    name: "Pleated Edge Chiffon",
    category: "chiffon",
    price: 160,
    tag: "New Drop",
    rating: "5.0",
    image: "https://i.pinimg.com/736x/74/f2/65/74f265507eeb2cbc9ebb990c6233c590.jpg",
    description: "Soft flowing chiffon accented with delicate micro-pleated ends for an elevated daytime look.",
    specs: ["195 × 75 cm", "Pleated Trim", "Boutique Cut"]
  },
  {
    id: 8,
    name: "Olive & Earth Laser-Cut",
    category: "chiffon",
    price: 160,
    tag: "Limited",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/2d/c4/6b/2dc46b33a92d67fa8c18d2a742e063e5.jpg",
    description: "Seamless laser-cut edges create a sleek, modern silhouette with zero fraying.",
    specs: ["190 × 75 cm", "Laser Edge", "Zero Fray"]
  },

  // -------- COTTON & JERSEY (8 STYLES) --------
  {
    id: 9,
    name: "Pure Egyptian Cotton Voile",
    category: "cotton",
    price: 150,
    tag: "100% Cotton",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/ec/f9/56/ecf95686974d8b921e0fe623d98b45b0.jpg",
    description: "Spun from breathable Egyptian cotton. Crisp yet airy for effortless summer wrapping.",
    specs: ["190 × 80 cm", "Egyptian Cotton", "Pin-Free"]
  },
  {
    id: 10,
    name: "Cloud Soft Cotton Gauze",
    category: "cotton",
    price: 160,
    tag: "Ultra Light",
    rating: "4.8",
    image: "https://i.pinimg.com/736x/04/79/01/047901dccee2867165e0aff7c0e1a248.jpg",
    description: "Double-gauze cotton texture that delivers volume and breathability without heaviness.",
    specs: ["195 × 80 cm", "Cotton Gauze", "Zero Sweat"]
  },
  {
    id: 11,
    name: "Everyday Comfy Jersey",
    category: "cotton",
    price: 170,
    tag: "Best Seller",
    rating: "5.0",
    image: "https://i.pinimg.com/736x/55/4b/09/554b09cb5f53b6895fc0500a56cf2613.jpg",
    description: "Stretchy, ultra-soft cotton jersey—no undercap or pins needed. Simply drape and go.",
    specs: ["190 × 70 cm", "Cotton Jersey", "Zero Pins"]
  },
  {
    id: 12,
    name: "Crinkle Cotton Wrap",
    category: "cotton",
    price: 175,
    tag: "No-Iron",
    rating: "4.8",
    image: "https://i.pinimg.com/736x/ce/25/05/ce2505a5c6be530e6f5fd2915ea158a6.jpg",
    description: "Naturally crinkled cotton that packs easily in your bag and never requires ironing.",
    specs: ["190 × 85 cm", "Crinkle Weave", "Travel Ready"]
  },
  {
    id: 13,
    name: "Ribbed Modal Cotton",
    category: "cotton",
    price: 185,
    tag: "Trending",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/81/a3/57/81a357dccf8f87b8bf5d9180c39be7cf.jpg",
    description: "Fine vertical ribbing creates a modern textured drape with snug, slip-free comfort.",
    specs: ["190 × 72 cm", "Ribbed Knit", "100% Opaque"]
  },
  {
    id: 14,
    name: "Bamboo-Cotton Jersey",
    category: "cotton",
    price: 190,
    tag: "Cooling",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/97/19/e5/9719e5601123ed074325bf03f736eb64.jpg",
    description: "Silky bamboo fibers blended with organic cotton for cool comfort on long uni or work days.",
    specs: ["195 × 70 cm", "Bamboo Cotton", "Cooling Touch"]
  },
  {
    id: 15,
    name: "Waffle Knit Cotton",
    category: "cotton",
    price: 195,
    tag: "Cozy",
    rating: "4.8",
    image: "https://i.pinimg.com/736x/b4/a2/85/b4a2856a59333e6aab734c34ecebc049.jpg",
    description: "Subtle honeycomb cotton texture offering rich structure and effortless everyday warmth.",
    specs: ["190 × 75 cm", "Waffle Cotton", "Structured"]
  },
  {
    id: 16,
    name: "Linen-Blend Cotton Shawl",
    category: "cotton",
    price: 200,
    tag: "Artisan",
    rating: "4.9",
    image: "https://i.pinimg.com/1200x/6b/94/7a/6b947a82db8524f893d6cb99a2c48c96.jpg",
    description: "Tailored cotton-linen blend with delicate eyelash fringes and an airy, editorial drape.",
    specs: ["200 × 80 cm", "Cotton Linen", "Fringe Trim"]
  },

  // -------- PREMIUM MODAL & SILK (8 STYLES) --------
  {
    id: 17,
    name: "Luxe Beechwood Modal",
    category: "premium",
    price: 300,
    tag: "Signature",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/9e/38/a0/9e38a0a9c0522f6878dfb895edfe9470.jpg",
    description: "Ultra-soft 100% beechwood modal that flows like water and elevates every modest outfit.",
    specs: ["195 × 80 cm", "Pure Modal", "Cloud Soft"]
  },
  {
    id: 18,
    name: "Crinkle Modal Luxe",
    category: "premium",
    price: 320,
    tag: "Effortless",
    rating: "4.8",
    image: "https://i.pinimg.com/736x/0a/1f/ae/0a1fae4fdb19e2718b5d5c00bc0e3caf.jpg",
    description: "Featherlight modal woven with subtle crinkle ridges for volume and soft editorial framing.",
    specs: ["200 × 85 cm", "Textured Modal", "Light Shine"]
  },
  {
    id: 19,
    name: "Medina Silk Classic",
    category: "premium",
    price: 350,
    tag: "Best Seller",
    rating: "5.0",
    image: "https://i.pinimg.com/736x/13/2f/20/132f202ba0bb9c5a12d03f3835c2434f.jpg",
    description: "Our signature customer favorite. Opaque Medina silk blend with a velvety matte-satin finish that never slips.",
    specs: ["195 × 75 cm", "Medina Silk", "100% Opaque"]
  },
  {
    id: 20,
    name: "Medina Silk Fringe Edit",
    category: "premium",
    price: 370,
    tag: "New Drop",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/35/3d/1b/353d1b6d2b0a491cffc323f8f3991061.jpg",
    description: "Classic Medina silk elevated with hand-twisted mini fringes for refined daytime styling.",
    specs: ["195 × 75 cm", "Medina Silk", "Hand Fringe"]
  },
  {
    id: 21,
    name: "Cashmere-Touch Modal",
    category: "premium",
    price: 385,
    tag: "Winter Edit",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/b3/50/6d/b3506d48a8a413bbd1a3400503182967.jpg",
    description: "Brushed modal finish giving cozy cashmere warmth while staying breathable indoors.",
    specs: ["200 × 80 cm", "Brushed Modal", "Plush Drape"]
  },
  {
    id: 22,
    name: "Matte Satin Soirée",
    category: "premium",
    price: 400,
    tag: "Occasion",
    rating: "4.9",
    image: "https://i.pinimg.com/736x/c7/a6/d7/c7a6d79b84f9a56c3ba48ba96202bdad.jpg",
    description: "Luminous matte-back satin with soft sheen on the outside and non-slip matte inside.",
    specs: ["195 × 75 cm", "Matte-Back Satin", "Event Ready"]
  },
  {
    id: 23,
    name: "Ombré Silk Modal",
    category: "premium",
    price: 415,
    tag: "Limited",
    rating: "5.0",
    image: "https://i.pinimg.com/736x/24/b8/85/24b88526ed4cdcc66f551bda8f3a384b.jpg",
    description: "Hand-dyed tonal gradient blending soft cream into warm mocha along the length of the scarf.",
    specs: ["200 × 80 cm", "Silk Modal", "Artisan Dye"]
  },
  {
    id: 24,
    name: "Royal Mulberry Silk Blend",
    category: "premium",
    price: 430,
    tag: "Luxury",
    rating: "5.0",
    image: "https://i.pinimg.com/736x/fe/a9/57/fea95798a390fc608e3c7aec619c1d43.jpg",
    description: "Our finest heirloom-quality mulberry silk & modal blend—packaged in a Luma signature gift box.",
    specs: ["200 × 80 cm", "Mulberry Silk Blend", "Gift Box Included"]
  }
];

// ================= APP STATE =================
const WHATSAPP_NUMBER = "201000000000";
let cart = JSON.parse(localStorage.getItem("luma_cart_v4")) || [];
let wishlist = JSON.parse(localStorage.getItem("luma_wishlist_v4")) || [];
let currentFilter = "all";
let searchQuery = "";
let currentSort = "featured";

let activeProduct = null;
let modalQuantity = 1;

// ================= DOM ELEMENTS =================
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const menuToggleBtn = document.getElementById("menu-toggle-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const sideNavLinks = document.querySelectorAll(".side-nav-link");
const viewSections = document.querySelectorAll(".view-section");

const productsGrid = document.getElementById("products-grid");
const resultsCountEl = document.getElementById("results-count");
const filterBtns = document.querySelectorAll(".filter-btn");
const categoryCards = document.querySelectorAll(".category-card");
const guideShopBtns = document.querySelectorAll(".guide-shop-btn");
const shopSearchInput = document.getElementById("shop-search");
const shopSortSelect = document.getElementById("shop-sort");

const wishlistCountEl = document.getElementById("wishlist-count");
const headerWishlistCountEl = document.getElementById("header-wishlist-count");
const openWishlistBtn = document.getElementById("open-wishlist-btn");
const headerWishlistBtn = document.getElementById("header-wishlist-btn");

// Product Modal (No Colors At All)
const productModal = document.getElementById("product-modal");
const closeProductModalBtn = document.getElementById("close-product-modal");
const modalImg = document.getElementById("modal-img");
const modalBreadcrumb = document.getElementById("modal-breadcrumb");
const modalBadge = document.getElementById("modal-badge");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalRating = document.getElementById("modal-rating");
const modalDesc = document.getElementById("modal-desc");
const modalSpecs = document.getElementById("modal-specs");
const qtyMinusBtn = document.getElementById("qty-minus");
const qtyPlusBtn = document.getElementById("qty-plus");
const modalQtyVal = document.getElementById("modal-qty-val");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart");
const modalBuyNowBtn = document.getElementById("modal-buy-now");
const relatedProductsEl = document.getElementById("related-products");

// Cart Drawer
const openCartBtn = document.getElementById("open-cart-btn");
const headerCartBtn = document.getElementById("header-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const headerCartCountEl = document.getElementById("header-cart-count");
const shippingProgressText = document.getElementById("shipping-progress-text");
const shippingProgressFill = document.getElementById("shipping-progress-fill");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const proceedCheckoutBtn = document.getElementById("proceed-checkout-btn");

// Checkout Modal
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckoutModalBtn = document.getElementById("close-checkout-modal");
const checkoutFormView = document.getElementById("checkout-form-view");
const checkoutSuccessView = document.getElementById("checkout-success-view");
const checkoutItemsPreview = document.getElementById("checkout-items-preview");
const checkoutForm = document.getElementById("checkout-form");
const governorateSelect = document.getElementById("governorate");
const checkoutSubtotalEl = document.getElementById("checkout-subtotal");
const checkoutShippingEl = document.getElementById("checkout-shipping");
const checkoutTotalEl = document.getElementById("checkout-total");
const continueShoppingBtn = document.getElementById("continue-shopping-btn");

// WhatsApp Widget
const waToggleBtn = document.getElementById("wa-toggle-btn");
const waWidget = document.getElementById("wa-widget");
const closeWaBtn = document.getElementById("close-wa-btn");
const waMessages = document.getElementById("wa-messages");
const waQuickReplies = document.getElementById("wa-quick-replies");
const waChatForm = document.getElementById("wa-chat-form");
const waInput = document.getElementById("wa-input");

// Toast
const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

// ================= SCROLL ANIMATIONS (HOME & COLLECTIONS) =================
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll(".anim-on-scroll");
  if (!("IntersectionObserver" in window)) {
    animatedEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.02 }
  );

  animatedEls.forEach((el) => {
    el.classList.remove("in-view");
    observer.observe(el);
  });
}

// ================= SIDEBAR DRAWER & VIEW SWITCHING =================
function openSidebar() {
  sidebar.classList.add("active");
  sidebar.setAttribute("aria-hidden", "false");
  sidebarOverlay.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
  sidebar.setAttribute("aria-hidden", "true");
  sidebarOverlay.classList.remove("active");
}

menuToggleBtn.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

window.switchView = function (viewName) {
  viewSections.forEach((section) => {
    const secView = section.dataset.view;
    if (viewName === "home") {
      // Home shows ONLY Landing Page (Hero) + Collections
      const showOnHome = secView === "home" || secView === "collections";
      section.classList.toggle("hidden-view", !showOnHome);
    } else {
      section.classList.toggle("hidden-view", secView !== viewName);
    }
  });

  sideNavLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === viewName);
  });

  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (viewName === "home" || viewName === "collections") {
    initScrollAnimations();
  }
};

window.navigateToFilter = function (category) {
  setActiveFilter(category);
  switchView("shop");
};

document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    switchView(el.dataset.nav);
  });
});

document.querySelectorAll("[data-nav-trigger]").forEach((btn) => {
  btn.addEventListener("click", () => {
    switchView(btn.dataset.navTrigger);
  });
});

const heroExploreBtn = document.getElementById("hero-explore-btn");
if (heroExploreBtn) {
  heroExploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const categoriesEl = document.getElementById("categories");
    if (categoriesEl) {
      categoriesEl.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ================= RENDER & FILTER PRODUCTS (NO COLORS) =================
function renderProducts() {
  let list = [...products];

  if (currentFilter === "wishlist") {
    list = list.filter((p) => wishlist.includes(p.id));
  } else if (currentFilter !== "all") {
    list = list.filter((p) => p.category === currentFilter);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (currentSort === "low-high") {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-low") {
    list.sort((a, b) => b.price - a.price);
  }

  resultsCountEl.textContent = `Showing ${list.length} hijab${list.length === 1 ? "" : "s"}`;
  productsGrid.innerHTML = "";

  if (list.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-products">
        <p>No hijabs matched your selection. Try clearing your search or choosing another fabric.</p>
      </div>
    `;
    return;
  }

  list.forEach((product) => {
    const isSaved = wishlist.includes(product.id);

    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media" onclick="openProductModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-tag">${product.tag}</span>
        <button
          class="wishlist-card-btn ${isSaved ? "saved" : ""}"
          onclick="event.stopPropagation(); toggleWishlist(${product.id})"
          aria-label="Save hijab"
        >
          <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
        <div class="quick-hover-bar">View Details</div>
      </div>

      <div class="product-body">
        <div class="product-meta-top">
          <span>${product.category}</span>
          <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
        </div>
        <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
        <p class="product-price">${product.price} EGP</p>
        <button class="card-buy-btn" onclick="openProductModal(${product.id})">
          View &amp; Add to Bag
        </button>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

window.setActiveFilter = function (category) {
  currentFilter = category;
  filterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProducts();
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => setActiveFilter(btn.dataset.category));
});

[...categoryCards, ...guideShopBtns].forEach((el) => {
  el.addEventListener("click", () => {
    navigateToFilter(el.dataset.filter);
  });
});

shopSearchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

shopSortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

// ================= WISHLIST =================
window.toggleWishlist = function (id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((item) => item !== id);
    showToast("Removed from saved hijabs");
  } else {
    wishlist.push(id);
    showToast("Saved to your wishlist");
  }
  localStorage.setItem("luma_wishlist_v4", JSON.stringify(wishlist));
  updateWishlistBadge();
  renderProducts();
};

function updateWishlistBadge() {
  wishlistCountEl.textContent = wishlist.length;
  headerWishlistCountEl.textContent = wishlist.length;
}

function showSavedWishlist() {
  setActiveFilter("wishlist");
  switchView("shop");
}

openWishlistBtn.addEventListener("click", showSavedWishlist);
headerWishlistBtn.addEventListener("click", showSavedWishlist);

// ================= PRODUCT DETAIL MODAL (NO COLORS AT ALL) =================
window.openProductModal = function (productId) {
  activeProduct = products.find((p) => p.id === productId);
  if (!activeProduct) return;

  modalQuantity = 1;

  modalImg.src = activeProduct.image;
  modalImg.alt = activeProduct.name;
  modalBreadcrumb.textContent = `Shop / ${activeProduct.category} Collection`;
  modalTitle.textContent = activeProduct.name;
  modalBadge.textContent = activeProduct.tag;
  modalPrice.textContent = `${activeProduct.price} EGP`;
  modalRating.innerHTML = `<i class="fa-solid fa-star"></i> ${activeProduct.rating}`;
  modalDesc.textContent = activeProduct.description;

  modalSpecs.innerHTML = activeProduct.specs
    .map((s) => `<span class="spec-pill">${s}</span>`)
    .join("");

  updateModalQuantityUI();
  renderRelatedProducts(activeProduct);
  productModal.classList.add("active");
};

function updateModalQuantityUI() {
  modalQtyVal.textContent = modalQuantity;
  const total = activeProduct.price * modalQuantity;
  modalAddToCartBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Add ${modalQuantity} to Bag &mdash; ${total} EGP`;
}

qtyMinusBtn.addEventListener("click", () => {
  if (modalQuantity > 1) {
    modalQuantity--;
    updateModalQuantityUI();
  }
});

qtyPlusBtn.addEventListener("click", () => {
  if (modalQuantity < 20) {
    modalQuantity++;
    updateModalQuantityUI();
  }
});

function renderRelatedProducts(current) {
  const related = products
    .filter((p) => p.category === current.category && p.id !== current.id)
    .slice(0, 2);

  relatedProductsEl.innerHTML = related
    .map(
      (item) => `
      <div class="related-mini-card" onclick="openProductModal(${item.id})">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h5>${item.name}</h5>
          <span>${item.price} EGP</span>
        </div>
      </div>
    `
    )
    .join("");
}

function closeProductModal() {
  productModal.classList.remove("active");
}

closeProductModalBtn.addEventListener("click", closeProductModal);
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) closeProductModal();
});

function addCurrentSelectionToCart() {
  if (!activeProduct) return;
  const existing = cart.find((item) => item.id === activeProduct.id);
  if (existing) {
    existing.quantity += modalQuantity;
  } else {
    cart.push({
      id: activeProduct.id,
      name: activeProduct.name,
      category: activeProduct.category,
      price: activeProduct.price,
      image: activeProduct.image,
      quantity: modalQuantity
    });
  }
  saveAndRenderCart();
}

modalAddToCartBtn.addEventListener("click", () => {
  addCurrentSelectionToCart();
  closeProductModal();
  openCart();
  showToast(`Added ${modalQuantity}x ${activeProduct.name} to your bag`);
});

modalBuyNowBtn.addEventListener("click", () => {
  addCurrentSelectionToCart();
  closeProductModal();
  openCheckoutModal();
});

// ================= CART DRAWER =================
function openCart() {
  closeSidebar();
  cartOverlay.classList.add("active");
  cartDrawer.classList.add("active");
}

function closeCart() {
  cartOverlay.classList.remove("active");
  cartDrawer.classList.remove("active");
}

openCartBtn.addEventListener("click", openCart);
headerCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function saveAndRenderCart() {
  localStorage.setItem("luma_cart_v4", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getSubtotal();

  cartCountEl.textContent = totalQty;
  headerCartCountEl.textContent = totalQty;
  cartSubtotalEl.textContent = `${subtotal} EGP`;

  const threshold = 800;
  const pct = Math.min((subtotal / threshold) * 100, 100);
  shippingProgressFill.style.width = `${pct}%`;

  if (subtotal >= threshold) {
    shippingProgressText.innerHTML = "You unlocked <strong>Free Egypt Delivery</strong>";
  } else {
    const remaining = threshold - subtotal;
    shippingProgressText.innerHTML = `Add <strong>${remaining} EGP</strong> more for Free Egypt Delivery`;
  }

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Your shopping bag is empty. Explore our collections.</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = "";
  cart.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p class="cart-item-color">${item.category ? item.category.toUpperCase() : "HIJAB"}</p>
        <p class="cart-item-price">${item.price * item.quantity} EGP</p>
        <div class="cart-item-controls">
          <div class="qty-box">
            <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
          </div>
          <button class="remove-item-btn" onclick="removeCartItem(${idx})">
            <i class="fa-regular fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });
}

window.updateCartQty = function (idx, delta) {
  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  saveAndRenderCart();
};

window.removeCartItem = function (idx) {
  cart.splice(idx, 1);
  saveAndRenderCart();
};

// ================= CHECKOUT MODAL =================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your bag is empty. Choose a hijab first.");
    return;
  }
  closeCart();
  checkoutFormView.classList.remove("hidden");
  checkoutSuccessView.classList.add("hidden");

  checkoutItemsPreview.innerHTML = cart
    .map(
      (item) => `
      <div class="preview-line">
        <span>${item.quantity}x ${item.name}</span>
        <strong>${item.price * item.quantity} EGP</strong>
      </div>
    `
    )
    .join("");

  updateCheckoutTotals();
  checkoutModal.classList.add("active");
}

function updateCheckoutTotals() {
  const subtotal = getSubtotal();
  const baseShip = Number(governorateSelect.value) || 0;
  const freeShip = subtotal >= 800 && baseShip > 0;
  const finalShip = freeShip ? 0 : baseShip;
  const total = subtotal + finalShip;

  checkoutSubtotalEl.textContent = `${subtotal} EGP`;
  checkoutShippingEl.textContent = freeShip
    ? "FREE (Order over 800 EGP)"
    : `${finalShip} EGP`;
  checkoutTotalEl.textContent = `${total} EGP`;
}

proceedCheckoutBtn.addEventListener("click", openCheckoutModal);
governorateSelect.addEventListener("change", updateCheckoutTotals);

function closeCheckoutModal() {
  checkoutModal.classList.remove("active");
}

closeCheckoutModalBtn.addEventListener("click", closeCheckoutModal);
checkoutModal.addEventListener("click", (e) => {
  if (e.target === checkoutModal) closeCheckoutModal();
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("customer-name").value.trim();
  const selectedOpt = governorateSelect.options[governorateSelect.selectedIndex];
  const gov = selectedOpt ? selectedOpt.dataset.name : "Egypt";
  const finalTotal = checkoutTotalEl.textContent;
  const randomOrderNum = "#LM-" + Math.floor(1000 + Math.random() * 9000);

  document.getElementById("success-customer-name").textContent = name.split(" ")[0];
  document.getElementById("order-number").textContent = randomOrderNum;
  document.getElementById("success-gov").textContent = gov;
  document.getElementById("success-total").textContent = finalTotal;

  checkoutFormView.classList.add("hidden");
  checkoutSuccessView.classList.remove("hidden");

  cart = [];
  checkoutForm.reset();
  saveAndRenderCart();
});

continueShoppingBtn.addEventListener("click", closeCheckoutModal);

// ================= WHATSAPP SUPPORT WIDGET =================
window.openWhatsAppWidget = function () {
  waWidget.classList.add("active");
};

waToggleBtn.addEventListener("click", () => {
  waWidget.classList.toggle("active");
});

closeWaBtn.addEventListener("click", () => {
  waWidget.classList.remove("active");
});

function appendWaMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.className = `wa-msg ${sender}`;
  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  div.innerHTML = `<p>${text}</p><span class="wa-time">${now}</span>`;
  waMessages.appendChild(div);
  waMessages.scrollTop = waMessages.scrollHeight;
}

waQuickReplies.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const topic = btn.dataset.topic;
    appendWaMessage(btn.textContent, "user");

    setTimeout(() => {
      if (topic === "shipping") {
        appendWaMessage(
          "<strong>Egypt Delivery Rates:</strong><br>• Cairo & Giza: 50 EGP (1–2 days)<br>• Alex & Delta: 65 EGP (2–3 days)<br>• Canal: 75 EGP | Upper Egypt: 85 EGP<br><em>Complimentary delivery on orders over 800 EGP.</em>"
        );
      } else if (topic === "fabric") {
        appendWaMessage(
          "<strong>Picking your fabric:</strong><br>• <strong>Chiffon (130–160 EGP):</strong> Breezy & structured.<br>• <strong>Cotton/Jersey (150–200 EGP):</strong> Pin-free & breathable.<br>• <strong>Premium Silk/Modal (300–430 EGP):</strong> Silky & luxe for occasions."
        );
      } else if (topic === "cart") {
        if (cart.length === 0) {
          appendWaMessage(
            "Your bag is currently empty. Add any hijab first, then tap this button to send your order directly to our WhatsApp."
          );
        } else {
          const summaryText = cart
            .map((i) => `• ${i.quantity}x ${i.name} - ${i.price * i.quantity} EGP`)
            .join("%0A");
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Luma%20Hijab!%20I%20want%20to%20order:%0A${summaryText}`;
          appendWaMessage(
            `Ready! <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color:#1A7D41;font-weight:700;text-decoration:underline;">Click here to send your ${cart.length} item(s) to WhatsApp</a>`
          );
        }
      }
    }, 350);
  });
});

waChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userText = waInput.value.trim();
  if (!userText) return;
  appendWaMessage(userText, "user");
  waInput.value = "";

  const encoded = encodeURIComponent(`Hello Luma Hijab! ${userText}`);
  const waDirect = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

  setTimeout(() => {
    const lower = userText.toLowerCase();
    if (lower.includes("price") || lower.includes("سعر")) {
      appendWaMessage(
        `Our prices start at 130 EGP for Chiffon, 150 EGP for Cotton, and 300 EGP for Premium Silk & Modal. <a href="${waDirect}" target="_blank" rel="noopener noreferrer" style="color:#1A7D41;font-weight:600;text-decoration:underline;">Open in WhatsApp</a>`
      );
    } else if (lower.includes("ship") || lower.includes("deliver") || lower.includes("شحن")) {
      appendWaMessage(
        `We deliver across all 27 Egypt governorates within 1–4 business days. Orders over 800 EGP ship free. <a href="${waDirect}" target="_blank" rel="noopener noreferrer" style="color:#1A7D41;font-weight:600;text-decoration:underline;">Open in WhatsApp</a>`
      );
    } else {
      appendWaMessage(
        `Thanks for reaching out! <a href="${waDirect}" target="_blank" rel="noopener noreferrer" style="color:#1A7D41;font-weight:700;text-decoration:underline;">Tap here to send this message directly on WhatsApp</a>.`
      );
    }
  }, 420);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
    closeCheckoutModal();
    closeCart();
    closeSidebar();
    waWidget.classList.remove("active");
  }
});

// ================= INIT =================
switchView("home");
renderProducts();
renderCart();
updateWishlistBadge();