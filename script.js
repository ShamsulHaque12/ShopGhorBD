/* ===================================================
   ShopGhor BD - Official Store Script
   WhatsApp: +88 01631402997
   Facebook: https://www.facebook.com/ShopGhorBD24/
   Customer Review & Rating System Enabled
   =================================================== */

const WHATSAPP_NUMBER = "8801631402997";
const CURRENCY = "৳";

/* ====== PRODUCTS LIST ====== */
const PRODUCTS = [
  {
    id: 1,
    cat: "fashion",
    name: "Premium Drop-Shoulder Heavy Cotton T-Shirt",
    banglaName: "প্রিমিয়াম ড্রপ-শোল্ডার কটন টি-শার্ট",
    price: 490,
    old: 750,
    rating: 4.8,
    reviews: 142,
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80",
    sizes: ["M", "L", "XL", "XXL"],
    badge: "বেস্ট সেলার",
    desc: "১০০% প্রিমিয়াম কম্বড কটন (220 GSM)। অত্যন্ত আরামদায়ক, কোনো কালার ফেড হবে না। ক্যাজুয়াল বা রেগুলার ওয়্যারের জন্য সেরা চয়েস।"
  },
  {
    id: 2,
    cat: "fashion",
    name: "Men's Slim Fit Stretchable Denim Jeans",
    banglaName: "মেনস স্লিম ফিট স্ট্রেচেবল ডেনিম জিন্স",
    price: 1190,
    old: 1650,
    rating: 4.7,
    reviews: 98,
    img: "https://images.unsplash.com/photo-1542272604-780c96856592?w=700&auto=format&fit=crop&q=80",
    sizes: ["30", "32", "34", "36"],
    badge: "হট ডিল",
    desc: "প্রিমিয়াম কোয়ালিটি স্ট্রেচেবল এক্সপোর্ট ডেনিম ফেব্রিক। দীর্ঘস্থায়ী এবং আরামদায়ক ফিটিং।"
  },
  {
    id: 3,
    cat: "fashion",
    name: "Genuine Leather Multi-Card Long Wallet",
    banglaName: "জেনুইন লেদার মাল্টি-কার্ড মানিব্যাগ",
    price: 650,
    old: 950,
    rating: 4.9,
    reviews: 86,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80",
    sizes: ["Classic Black", "Vintage Brown"],
    badge: "১০০% লেদার",
    desc: "আসল কাঁচা চামড়া দিয়ে তৈরি। ৮টি কার্ড স্লট, কয়েন পকেট এবং ফুল ক্যাশ স্লট রয়েছে।"
  },
  {
    id: 4,
    cat: "fashion",
    name: "Breathable Lightweight Running Sneakers",
    banglaName: "লাইটওয়েট স্পোর্টস রানিং স্নিকার্স",
    price: 1950,
    old: 2600,
    rating: 4.6,
    reviews: 115,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
    sizes: ["40", "41", "42", "43", "44"],
    badge: "জনপ্রিয়",
    desc: "অতিরিক্ত নরম সোল এবং অ্যান্টি-স্লিপ গ্রিপ। রানিং, ওয়াকিং বা জিমের জন্য আরামদায়ক।"
  },
  {
    id: 5,
    cat: "fashion",
    name: "Classic UV400 Polarized Sunglasses",
    banglaName: "ক্লাসিক পোলারাইজড সানগ্লাস",
    price: 550,
    old: 850,
    rating: 4.8,
    reviews: 73,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80",
    sizes: ["Matte Black", "Silver Shade"],
    badge: "টপ রেটেড",
    desc: "UV400 প্রটেকশন সহ প্রিমিয়াম মেটাল ফ্রেম। চোখের সুরক্ষায় এবং ফ্যাশনে অত্যন্ত প্রিমিয়াম।"
  },
  {
    id: 6,
    cat: "electronics",
    name: "TWS Wireless Bluetooth 5.3 Earbuds",
    banglaName: "TWS ট্রু ওয়্যারলেস ব্লুটুথ ইয়ারবাডস",
    price: 1450,
    old: 2200,
    rating: 4.7,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop&q=80",
    sizes: ["Black", "White"],
    badge: "মেগা অফার",
    desc: "হাই-ফাই ডাবল বেস ও অ্যাক্টিভ এনভায়রনমেন্টাল নয়েজ ক্যান্সেলেশন (ENC)। ৩০ ঘণ্টা মোট ব্যাটারি ব্যাকআপ।"
  },
  {
    id: 7,
    cat: "electronics",
    name: "Ultra AMOLED Bluetooth Calling Smartwatch",
    banglaName: "আল্ট্রা কলিং স্মার্টওয়াচ (AMOLED)",
    price: 2650,
    old: 3800,
    rating: 4.8,
    reviews: 164,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80",
    sizes: ["Black Strap", "Orange Ocean Strap"],
    badge: "বেস্ট সেলার",
    desc: "১.৯৬ ইঞ্চি সুপার এমোলেড ডিসপ্লে, সরাসরি কল রিসিভ/ডায়াল, হার্ট রেট ও হেলথ ট্র্যাকার এবং ওয়াটারপ্রুফ বডি।"
  },
  {
    id: 8,
    cat: "electronics",
    name: "20,000mAh 22.5W Super Fast Power Bank",
    banglaName: "২০,০০০mAh ফাস্ট চার্জিং পাওয়ার ব্যাংক",
    price: 1750,
    old: 2400,
    rating: 4.9,
    reviews: 130,
    img: "https://images.unsplash.com/photo-1609592426868-a47738222fa5?w=700&auto=format&fit=crop&q=80",
    sizes: ["Dual Output"],
    badge: "ফাস্ট চার্জ",
    desc: "PD 22.5W সুপার ফাস্ট চার্জিং সাপোর্ট। ডিজিটাল এলইডি পার্সেন্টেজ ডিসপ্লে এবং ডুয়াল ইউএসবি পোর্ট।"
  },
  {
    id: 9,
    cat: "electronics",
    name: "Waterproof RGB Bass Bluetooth Speaker",
    banglaName: "ওয়াটারপ্রুফ আরজিবি পোর্টেবল স্পিকার",
    price: 1550,
    old: 2100,
    rating: 4.6,
    reviews: 92,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&auto=format&fit=crop&q=80",
    sizes: ["Midnight Black", "Camo Blue"],
    badge: "হেভি বেস",
    desc: "৩৬০ ডিগ্রি ডিপ স্টেরিও সাউন্ড, মাল্টিকালার আরজিবি লাইটিং এবং আইপিএক্স৭ ওয়াটারপ্রুফ বডি।"
  },
  {
    id: 10,
    cat: "electronics",
    name: "Wireless ANC Over-Ear Pro Headphones",
    banglaName: "ওয়্যারলেস প্রো স্টুডিও হেডফোন",
    price: 2450,
    old: 3500,
    rating: 4.8,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
    sizes: ["Black", "Space Grey"],
    badge: "প্রো অডিও",
    desc: "প্রিমিয়াম মেমোরি ফোম কুশন, অ্যাক্টিভ নয়েজ ক্যান্সেলেশন এবং ৪০ ঘণ্টার লং ব্যাটারি লাইফ।"
  }
];

/* ====== REVIEWS & RATINGS STATE ====== */
let productRatings = JSON.parse(localStorage.getItem("shopghor_product_ratings") || "{}");
let productReviews = JSON.parse(localStorage.getItem("shopghor_user_reviews") || "null");

// Initialize seed reviews if none saved yet
if (!productReviews) {
  productReviews = {
    1: [
      { id: "rev_1", name: "মাহমুদুল হাসান", rating: 5, date: "১২ অক্টোবর, ২০২৬", note: "কাপড়ের ফেব্রিক অত্যন্ত প্রিমিয়াম আর ড্রপ শোল্ডার ফিটিং একদম পারফেক্ট হয়েছে। ধন্যবাদ ShopGhor BD!", verified: true },
      { id: "rev_2", name: "তানভীর আহমেদ", rating: 5, date: "১০ অক্টোবর, ২০২৬", note: "ডেলিভারি খুব দ্রুত পেয়েছি, ওয়াশ করার পরও কালার ও ফেব্রিক একদম নতুনের মতো।", verified: true }
    ],
    2: [
      { id: "rev_3", name: "সাজিদুর রহমান", rating: 5, date: "০৮ অক্টোবর, ২০২৬", note: "স্ট্রেচেবল ডেনিম, পরে অনেক আরামদায়ক। সাইজ চার্ট সম্পূর্ণ সঠিক ছিল।", verified: true }
    ],
    3: [
      { id: "rev_4", name: "আরিফুল ইসলাম", rating: 5, date: "০৫ অক্টোবর, ২০২৬", note: "জেনুইন লেদারের মানিব্যাগ, ৮টি কার্ড অনায়াসে রাখা যায়। ফিনিশিং অসাধারণ।", verified: true }
    ],
    6: [
      { id: "rev_5", name: "ইমরান খান", rating: 5, date: "১১ অক্টোবর, ২০২৬", note: "সাউন্ড বেস দুর্দান্ত! ব্যাটারি ব্যাকআপ এক চার্জেই ৫ ঘণ্টার বেশি চলে।", verified: true }
    ],
    7: [
      { id: "rev_6", name: "ফারহান কবির", rating: 5, date: "১৪ অক্টোবর, ২০২৬", note: "অ্যামোলেড ডিসপ্লে কোয়ালিটি চমৎকার। ব্লুটুথ কলিং ক্লিয়ার শোনা যায়। এই বাজেটে সেরা ঘড়ি।", verified: true }
    ]
  };
  localStorage.setItem("shopghor_user_reviews", JSON.stringify(productReviews));
}

// Sync saved ratings into PRODUCTS array
PRODUCTS.forEach(p => {
  if (productRatings[p.id]) {
    p.rating = productRatings[p.id].rating;
    p.reviews = productRatings[p.id].reviews;
  }
});

/* ====== CART & UI STATE ====== */
let cart = JSON.parse(localStorage.getItem("shopghor_cart") || "[]");
let state = { cat: "all", sort: "new", q: "" };
let sel = {};
let lastOrderData = null;
let currentReviewProduct = null;
let currentSelectedStar = 5;

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const money = n => CURRENCY + Number(n).toLocaleString("en-US");

/* ====== RENDER GRID ====== */
function renderGrid() {
  let list = PRODUCTS.filter(p => {
    const matchCat = state.cat === "all" || p.cat === state.cat;
    const matchQuery =
      p.name.toLowerCase().includes(state.q) ||
      (p.banglaName && p.banglaName.toLowerCase().includes(state.q));
    return matchCat && matchQuery;
  });

  if (state.sort === "low") list.sort((a, b) => a.price - b.price);
  if (state.sort === "high") list.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (state.sort === "new") list.sort((a, b) => b.id - a.id);

  const grid = $("#grid");
  const countEl = $("#productCount");
  if (countEl) countEl.textContent = `${list.length} টি পণ্য পাওয়া গেছে`;

  if (!list.length) {
    grid.innerHTML = "";
    $("#empty").hidden = false;
    return;
  }

  $("#empty").hidden = true;
  grid.innerHTML = list.map(p => {
    const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    return `
      <article class="card" data-id="${p.id}">
        <div class="thumb-wrap">
          <img src="${p.img}" alt="${p.name}" class="thumb-img" loading="lazy">
          ${discount ? `<span class="badge sale">-${discount}% ছাড়</span>` : ""}
          ${p.badge ? `<span class="badge tag">${p.badge}</span>` : ""}
          <button class="quick-view-btn" data-id="${p.id}" title="কুইক ভিউ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            বিস্তারিত
          </button>
        </div>

        <div class="card-info">
          <div class="meta-row">
            <span class="stars">★ ${p.rating} <small>(${p.reviews})</small></span>
            <span class="stock-status">✓ স্টকে আছে</span>
          </div>

          <h3 class="product-title" title="${p.name}">${p.name}</h3>

          <div class="price-wrap">
            <span class="price-now">${money(p.price)}</span>
            ${p.old ? `<span class="price-old">${money(p.old)}</span>` : ""}
          </div>

          <div class="card-actions">
            <button class="btn-card-add" data-add="${p.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              কার্টে যোগ
            </button>
            <button class="btn-card-buy" data-buy="${p.id}">
              অর্ডার করুন
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* ====== REVIEWS LIST RENDER ====== */
function renderProductReviewsList(productId) {
  const list = productReviews[productId] || [];
  if (!list.length) {
    return `<div class="empty-reviews-hint">এই প্রোডাক্টের এখনও কোনো কাস্টমার রিভিউ জমা পড়েনি। পণ্যটি হাতে পাওয়ার পর প্রথম রিভিউটি আপনিই লিখুন!</div>`;
  }
  return list.map(rev => {
    const initial = rev.name ? rev.name.trim().charAt(0) : "U";
    const starsGold = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
    return `
      <div class="review-item">
        <div class="rev-avatar">${initial}</div>
        <div class="rev-body">
          <div class="rev-head">
            <div>
              <span class="rev-user-name">${rev.name}</span>
              ${rev.verified ? `<span class="rev-verified-tag">✓ ভেরিফাইড ক্রেতা</span>` : ""}
            </div>
            <div class="rev-stars">${starsGold}</div>
          </div>
          <div class="rev-date">${rev.date}</div>
          <p class="rev-text">${rev.note}</p>
        </div>
      </div>
    `;
  }).join("");
}

/* ====== PRODUCT MODAL ====== */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  sel = { p, size: p.sizes[0] || "", qty: 1 };
  const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const savings = p.old ? p.old - p.price : 0;

  $("#pBody").innerHTML = `
    <div class="product-detail-modal">
      <div class="pd-media">
        <img src="${p.img}" alt="${p.name}" class="pd-img">
        ${discount ? `<span class="badge sale">-${discount}% স্পেশাল ডিসকাউন্ট</span>` : ""}
      </div>

      <div class="pd-content">
        <div class="pd-badge-row">
          <span class="badge-cat">${p.cat === "fashion" ? "ফ্যাশন ও লাইফস্টাইল" : "গ্যাজেট ও ইলেকট্রনিক্স"}</span>
          <span class="stock-pill">● স্টকে রয়েছে (সীমিত অফার)</span>
        </div>

        <h2 class="pd-title">${p.name}</h2>
        <div class="pd-rating">
          <span class="stars-gold">★★★★★</span>
          <b>${p.rating}</b>
          <span class="muted">(${p.reviews} জন কাস্টমার রিভিউ)</span>
        </div>

        <div class="pd-price-box">
          <div class="pd-price-row">
            <span class="pd-price">${money(p.price)}</span>
            ${p.old ? `<s class="pd-old">${money(p.old)}</s>` : ""}
          </div>
          ${savings ? `<p class="savings-text">🎉 আপনি এই অর্ডারে <b>${money(savings)}</b> সাশ্রয় করছেন!</p>` : ""}
        </div>

        <p class="pd-desc">${p.desc}</p>

        ${p.sizes.length ? `
          <div class="opt-group">
            <label class="opt-label">সাইজ / কালার বেছে নিন:</label>
            <div class="opts">
              ${p.sizes.map((s, i) => `
                <button type="button" class="opt ${i === 0 ? "on" : ""}" data-size="${s}">${s}</button>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <div class="qty-group">
          <label class="opt-label">পরিমাণ (Quantity):</label>
          <div class="qty-stepper">
            <button type="button" data-q="-1" aria-label="Decrease">−</button>
            <span id="qv">1</span>
            <button type="button" data-q="1" aria-label="Increase">+</button>
          </div>
        </div>

        <div class="pd-actions">
          <button type="button" class="btn btn-primary" id="btnDetailBuy">⚡ সরাসরি অর্ডার করুন (Buy Now)</button>
          <button type="button" class="btn btn-outline" id="btnDetailCart">🛒 কার্টে যোগ করুন</button>
        </div>

        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`আসসালামু আলাইকুম, আমি '${p.name}' প্রোডাক্টটি সম্পর্কে জানতে চাচ্ছি। লিংক: ${window.location.href}`)}"
           target="_blank" rel="noopener" class="pd-wa-inquiry">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 01-1.25-4.38c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.54 1.55 2.39 3.6 2.39 5.78 0 4.52-3.67 8.19-8.19 8.19z"/></svg>
          এই প্রোডাক্ট সম্পর্কে হোয়াটসঅ্যাপে সরাসরি কথা বলুন
        </a>
      </div>

      <!-- Customer Reviews Section -->
      <div class="product-reviews-box">
        <div class="pr-header">
          <div class="pr-score-summary">
            <div class="pr-big-score">★ ${p.rating}</div>
            <div class="pr-stars-badge">
              <span class="pr-stars-gold">${"★".repeat(Math.min(5, Math.max(1, Math.round(p.rating))))}${"☆".repeat(Math.max(0, 5 - Math.round(p.rating)))}</span>
              <span class="pr-total-text">${p.reviews} জন ক্রেতার রেটিং ও রিভিউ</span>
            </div>
          </div>
          <button type="button" class="btn-write-review" data-open-review="${p.id}">
            ✍️ এই পণ্যটির রিভিউ লিখুন
          </button>
        </div>

        <div class="reviews-list">
          ${renderProductReviewsList(p.id)}
        </div>
      </div>
    </div>
  `;
  $("#pOverlay").hidden = false;
  document.body.classList.add("modal-open");
}

/* ====== REVIEW MODAL & FORM LOGIC ====== */
const STAR_FEEDBACK = {
  1: "😞 সন্তুষ্ট হতে পারিনি (১/৫ রেটিং)",
  2: "😐 প্রত্যাশা অনুযায়ী নয় (২/৫ রেটিং)",
  3: "👍 মোটামুটি ভালো (৩/৫ রেটিং)",
  4: "😊 খুব ভালো লেগেছে (৪/৫ রেটিং)",
  5: "🌟 অসাধারণ! সম্পূর্ণ সন্তুষ্ট (৫/৫ রেটিং)"
};

function updateStarRatingUI(val) {
  currentSelectedStar = val;
  const input = $("#selectedStarInput");
  if (input) input.value = val;
  const textEl = $("#starRatingText");
  if (textEl) textEl.textContent = STAR_FEEDBACK[val] || `${val}/৫ রেটিং`;
  $$("#starRatingWidget .star-btn-pro").forEach(btn => {
    const star = Number(btn.dataset.star);
    btn.classList.toggle("on", star <= val);
  });
}

function setReviewProductInfo(p) {
  currentReviewProduct = p;
  const pThumb = $("#reviewProductThumb");
  const pName = $("#reviewProductName");
  const pIdInput = $("#reviewProductId");
  const pMeta = $("#reviewProductMeta");
  if (pThumb) pThumb.src = p.img;
  if (pName) pName.textContent = p.name;
  if (pIdInput) pIdInput.value = p.id;
  if (pMeta) pMeta.textContent = `${money(p.price)} · ★ ${p.rating} (${p.reviews} জন কাস্টমার রিভিউ)`;
}

function openReviewModal(productId = null) {
  const pSelectGroup = $("#reviewProductSelectGroup");
  const pSelect = $("#reviewProductSelect");

  if (productId) {
    const targetProduct = PRODUCTS.find(x => x.id === productId);
    if (targetProduct) setReviewProductInfo(targetProduct);
    if (pSelectGroup) pSelectGroup.hidden = true;
  } else {
    // Open for any product via selector
    const defaultProduct = currentReviewProduct || PRODUCTS[0];
    if (pSelect) {
      pSelect.innerHTML = PRODUCTS.map(p => `
        <option value="${p.id}" ${defaultProduct && defaultProduct.id === p.id ? "selected" : ""}>
          ${p.name} — ${money(p.price)} (★ ${p.rating})
        </option>
      `).join("");
      pSelect.value = defaultProduct.id;
      pSelect.onchange = e => {
        const selP = PRODUCTS.find(x => x.id === Number(e.target.value));
        if (selP) setReviewProductInfo(selP);
      };
    }
    setReviewProductInfo(defaultProduct);
    if (pSelectGroup) pSelectGroup.hidden = false;
  }

  const form = $("#reviewForm");
  if (form) form.reset();
  updateStarRatingUI(5);

  $("#rOverlay").hidden = false;
  document.body.classList.add("modal-open");
}

function submitReview(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const pid = Number($("#reviewProductId").value || (currentReviewProduct ? currentReviewProduct.id : 1));
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return toast("প্রোডাক্ট পাওয়া যায়নি!");

  const name = formData.get("name").trim();
  const note = formData.get("note").trim();
  const stars = Number($("#selectedStarInput").value || 5);
  const orderRef = formData.get("orderRef") ? formData.get("orderRef").trim() : "";

  // 1. Calculate new cumulative average rating
  const prevTotal = p.rating * p.reviews;
  p.reviews += 1;
  p.rating = Number(((prevTotal + stars) / p.reviews).toFixed(1));

  // 2. Persist updated ratings to localStorage
  productRatings[p.id] = { rating: p.rating, reviews: p.reviews };
  localStorage.setItem("shopghor_product_ratings", JSON.stringify(productRatings));

  // 3. Format Date in Bengali
  const dateStr = new Date().toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // 4. Create review item
  const newRev = {
    id: "rev_" + Date.now(),
    productId: p.id,
    name,
    orderRef,
    rating: stars,
    note,
    date: dateStr,
    verified: Boolean(orderRef) || true
  };

  if (!productReviews[p.id]) productReviews[p.id] = [];
  productReviews[p.id].unshift(newRev);
  localStorage.setItem("shopghor_user_reviews", JSON.stringify(productReviews));

  // 5. Close review modal
  $("#rOverlay").hidden = true;
  document.body.classList.remove("modal-open");

  // 6. Refresh Grid & Modal if open
  renderGrid();
  const pOverlay = $("#pOverlay");
  if (pOverlay && !pOverlay.hidden && sel.p && sel.p.id === p.id) {
    openProduct(p.id);
  }

  toast(`🎉 ধন্যবাদ ${name}! আপনার ${stars}-স্টার রিভিউ যোগ হয়েছে (নতুন রেটিং: ★ ${p.rating})`);
}

/* ====== CART MANAGEMENT ====== */
const saveCart = () => localStorage.setItem("shopghor_cart", JSON.stringify(cart));

function addToCartDirect(productId, openDrawer = false) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const size = p.sizes[0] || "";
  const existing = cart.find(i => i.id === p.id && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: p.id, size, qty: 1 });
  }
  saveCart();
  renderCart();
  toast(`✓ "${p.name}" কার্টে যোগ হয়েছে!`);
  animateCartIcon();
  if (openDrawer) openCartDrawer();
}

function addToCartFromModal() {
  const { p, size, qty } = sel;
  const existing = cart.find(i => i.id === p.id && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: p.id, size, qty });
  }
  saveCart();
  renderCart();
  toast(`✓ "${p.name}" কার্টে যোগ হয়েছে!`);
  animateCartIcon();
  closeAll();
}

function updateCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  if (cart[index]) {
    const p = PRODUCTS.find(x => x.id === cart[index].id);
    cart.splice(index, 1);
    saveCart();
    renderCart();
    toast(`"${p ? p.name : 'আইটেম'}" কার্ট থেকে রিমুভ করা হয়েছে`);
  }
}

function getDeliveryFee() {
  if (!cart.length) return 0;
  const areaSelect = $("#area");
  return areaSelect ? Number(areaSelect.value || 60) : 60;
}

function getSubtotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function animateCartIcon() {
  const btn = $("#openCart");
  if (btn) {
    btn.classList.add("bump");
    setTimeout(() => btn.classList.remove("bump"), 300);
  }
}

function renderCart() {
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  const badge = $("#cartCount");
  if (badge) badge.textContent = totalCount;

  const headerSubtotal = $("#headerCartTotal");
  if (headerSubtotal) headerSubtotal.textContent = money(getSubtotal());

  const itemsContainer = $("#cartItems");
  const sub = getSubtotal();
  const delivery = getDeliveryFee();
  const total = sub + delivery;

  if (!cart.length) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <div class="empty-cart-icon">🛒</div>
        <h3>আপনার কার্টটি বর্তমানে খালি</h3>
        <p>পছন্দের প্রোডাক্টের নিচে "কার্টে যোগ করুন" বাটনে ক্লিক করুন।</p>
        <button class="btn btn-primary" onclick="closeAll()">কেনাকাটা শুরু করুন</button>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = cart.map((item, idx) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return "";
      return `
        <div class="cart-item">
          <img src="${p.img}" alt="${p.name}" class="ci-img">
          <div class="ci-details">
            <h4 class="ci-title">${p.name}</h4>
            <div class="ci-variant">${item.size ? `সাইজ: <b>${item.size}</b>` : "স্ট্যান্ডার্ড"} · ${money(p.price)}</div>
            <div class="ci-controls">
              <div class="ci-stepper">
                <button type="button" class="btn-step" data-cart-step="-1" data-cart-idx="${idx}">−</button>
                <span>${item.qty}</span>
                <button type="button" class="btn-step" data-cart-step="1" data-cart-idx="${idx}">+</button>
              </div>
              <button type="button" class="ci-remove" data-cart-rm="${idx}">ডিলিট করুন</button>
            </div>
          </div>
          <div class="ci-total">${money(p.price * item.qty)}</div>
        </div>
      `;
    }).join("");
  }

  // Update summary numbers
  const subEl = $("#subtotal");
  const delEl = $("#delivery");
  const totEl = $("#total");
  const formTotEl = $("#formTotal");
  const formSubEl = $("#formSubtotal");
  const formDelEl = $("#formDelivery");

  if (subEl) subEl.textContent = money(sub);
  if (delEl) delEl.textContent = money(delivery);
  if (totEl) totEl.textContent = money(total);
  if (formTotEl) formTotEl.textContent = money(total);
  if (formSubEl) formSubEl.textContent = money(sub);
  if (formDelEl) formDelEl.textContent = money(delivery);
}

/* ====== CHECKOUT & ORDER ====== */
function openCartDrawer() {
  renderCart();
  $("#drawer").hidden = false;
  document.body.classList.add("drawer-open");
}

function openCheckout() {
  if (!cart.length) {
    toast("অনুগ্রহ করে আগে কার্টে অন্তত একটি পণ্য যোগ করুন");
    return;
  }
  closeAll();
  renderCart();
  renderCheckoutSummary();
  $("#cOverlay").hidden = false;
  document.body.classList.add("modal-open");
}

function renderCheckoutSummary() {
  const container = $("#checkoutItemsSummary");
  if (!container) return;
  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return "";
    return `
      <div class="co-item-row">
        <img src="${p.img}" alt="" class="co-item-thumb">
        <div class="co-item-info">
          <div class="co-item-name">${p.name}</div>
          <small class="co-item-meta">${item.size ? `(${item.size}) ` : ""}x ${item.qty}</small>
        </div>
        <div class="co-item-price">${money(p.price * item.qty)}</div>
      </div>
    `;
  }).join("");
}

function submitOrder(e) {
  e.preventDefault();
  if (!cart.length) return toast("আপনার কার্ট খালি!");

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const address = formData.get("address").trim();
  const areaSelect = $("#area");
  const areaName = areaSelect ? areaSelect.selectedOptions[0].text : "ঢাকার ভিতরে";
  const paymentMethod = formData.get("payment");
  const note = formData.get("note") ? formData.get("note").trim() : "নেই";

  const sub = getSubtotal();
  const del = getDeliveryFee();
  const total = sub + del;
  const orderNo = "SG-" + Date.now().toString().slice(-6);

  const lines = cart.map((item, idx) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return `${idx + 1}. *${p.name}* ${item.size ? `[${item.size}]` : ""} x ${item.qty} = ${money(p.price * item.qty)}`;
  }).join("\n");

  const waMessage = 
`🛍️ *নতুন অর্ডার - ${orderNo}*
🏢 *শপ:* ShopGhor BD
🌐 https://www.facebook.com/ShopGhorBD24/

📦 *অর্ডারকৃত পণ্যসমূহ:*
${lines}

━━━━━━━━━━━━━━━━
💵 সাবটোটাল: ${money(sub)}
🚚 ডেলিভারি চার্জ: ${money(del)}
💰 *সর্বমোট প্রদেয় বিল: ${money(total)}*
━━━━━━━━━━━━━━━━

👤 *কাস্টমার তথ্য:*
• নাম: ${name}
• ফোন: ${phone}
• ঠিকানা: ${address}
• এরিয়া: ${areaName}
• পেমেন্ট: ${paymentMethod}
• নোট: ${note}

অর্ডারটি কনফার্ম করে দ্রুত ডেলিভারি দেওয়ার অনুরোধ করা হলো। ধন্যবাদ!`;

  lastOrderData = {
    orderNo,
    total,
    name,
    phone,
    address,
    waUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`
  };

  // Open WhatsApp in new tab
  window.open(lastOrderData.waUrl, "_blank");

  // Show order success modal
  showOrderSuccess(lastOrderData);

  // Clear cart and form
  cart = [];
  saveCart();
  renderCart();
  form.reset();
}

function showOrderSuccess(data) {
  closeAll();
  const modal = $("#sOverlay");
  if (modal) {
    $("#orderIdDisplay").textContent = data.orderNo;
    $("#orderCustomerDisplay").textContent = `${data.name} (${data.phone})`;
    $("#orderTotalDisplay").textContent = money(data.total);
    $("#btnOpenWaOrder").href = data.waUrl;
    modal.hidden = false;
    document.body.classList.add("modal-open");
  } else {
    toast(`🎉 অর্ডার সম্পন্ন হয়েছে! অর্ডার নং: ${data.orderNo}`);
  }
}

/* ====== UI UTILITIES ====== */
function closeAll() {
  ["#pOverlay", "#cOverlay", "#sOverlay", "#rOverlay", "#drawer"].forEach(sel => {
    const el = $(sel);
    if (el) el.hidden = true;
  });
  document.body.classList.remove("modal-open", "drawer-open");
}

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

/* ====== EVENT LISTENERS ====== */
function bindEvents() {
  // Category tabs
  $("#tabs").onclick = e => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    $$(".tab").forEach(t => t.classList.remove("on"));
    btn.classList.add("on");
    state.cat = btn.dataset.cat;
    renderGrid();
  };

  // Sort dropdown
  $("#sort").onchange = e => {
    state.sort = e.target.value;
    renderGrid();
  };

  // Search input
  $("#search").oninput = e => {
    state.q = e.target.value.toLowerCase().trim();
    renderGrid();
  };

  // Product Grid clicks (Card details, Add to cart, Buy now)
  $("#grid").onclick = e => {
    const addBtn = e.target.closest("[data-add]");
    const buyBtn = e.target.closest("[data-buy]");
    const qvBtn = e.target.closest(".quick-view-btn");
    const card = e.target.closest(".card");

    if (addBtn) {
      e.stopPropagation();
      addToCartDirect(Number(addBtn.dataset.add), false);
      return;
    }

    if (buyBtn) {
      e.stopPropagation();
      addToCartDirect(Number(buyBtn.dataset.buy), false);
      openCheckout();
      return;
    }

    if (qvBtn) {
      e.stopPropagation();
      openProduct(Number(qvBtn.dataset.id));
      return;
    }

    if (card) {
      openProduct(Number(card.dataset.id));
    }
  };

  // Product detail modal interactions
  $("#pBody").onclick = e => {
    const opt = e.target.closest(".opt");
    const qBtn = e.target.closest("[data-q]");
    const writeRevBtn = e.target.closest("[data-open-review]");

    if (opt) {
      $$(".opt").forEach(x => x.classList.remove("on"));
      opt.classList.add("on");
      sel.size = opt.dataset.size;
    }

    if (qBtn) {
      sel.qty = Math.max(1, sel.qty + Number(qBtn.dataset.q));
      const qv = $("#qv");
      if (qv) qv.textContent = sel.qty;
    }

    if (writeRevBtn) {
      openReviewModal(Number(writeRevBtn.dataset.openReview));
      return;
    }

    if (e.target.id === "btnDetailCart") {
      addToCartFromModal();
    }

    if (e.target.id === "btnDetailBuy") {
      addToCartFromModal();
      openCheckout();
    }
  };

  // Review modal trigger from top announcement bar
  const quickRevBtn = $("#openQuickReview");
  if (quickRevBtn) {
    quickRevBtn.onclick = () => openReviewModal();
  }

  // Review form submission
  const revForm = $("#reviewForm");
  if (revForm) {
    revForm.onsubmit = submitReview;
  }

  // Star rating widget hover & click
  const starWidget = $("#starRatingWidget");
  if (starWidget) {
    starWidget.onclick = e => {
      const starBtn = e.target.closest(".star-btn-pro, .star-btn");
      if (starBtn) {
        updateStarRatingUI(Number(starBtn.dataset.star));
      }
    };

    starWidget.onmouseover = e => {
      const starBtn = e.target.closest(".star-btn-pro, .star-btn");
      if (starBtn) {
        const val = Number(starBtn.dataset.star);
        $$("#starRatingWidget .star-btn-pro, #starRatingWidget .star-btn").forEach(btn => {
          btn.classList.toggle("on", Number(btn.dataset.star) <= val);
        });
        const textEl = $("#starRatingText");
        if (textEl) textEl.textContent = STAR_FEEDBACK[val] || `${val}/৫ রেটিং`;
      }
    };

    starWidget.onmouseleave = () => {
      updateStarRatingUI(currentSelectedStar);
    };
  }

  // Quick review compliment chips (one-tap feedback)
  const quickChips = $("#reviewQuickChips");
  if (quickChips) {
    quickChips.onclick = e => {
      const chip = e.target.closest(".rev-chip");
      if (!chip) return;
      const tagText = chip.dataset.chip || chip.textContent.trim();
      const noteInput = $("#revNote");
      if (noteInput) {
        const currentVal = noteInput.value.trim();
        if (!currentVal) {
          noteInput.value = tagText;
        } else if (!currentVal.includes(tagText)) {
          noteInput.value = `${currentVal} • ${tagText}`;
        }
        noteInput.focus();
        chip.style.transform = "scale(0.92)";
        setTimeout(() => { chip.style.transform = ""; }, 180);
      }
    };
  }

  // Cart drawer open
  $("#openCart").onclick = openCartDrawer;

  // Cart item interactions (quantity step & delete)
  $("#cartItems").onclick = e => {
    const stepBtn = e.target.closest("[data-cart-step]");
    const rmBtn = e.target.closest("[data-cart-rm]");

    if (stepBtn) {
      const idx = Number(stepBtn.dataset.cartIdx);
      const delta = Number(stepBtn.dataset.cartStep);
      updateCartQty(idx, delta);
      return;
    }

    if (rmBtn) {
      removeCartItem(Number(rmBtn.dataset.cartRm));
    }
  };

  // Checkout trigger from drawer
  $("#toCheckout").onclick = openCheckout;

  // Area change in order form
  const areaSelect = $("#area");
  if (areaSelect) {
    areaSelect.onchange = () => {
      renderCart();
      renderCheckoutSummary();
    };
  }

  // Order submission
  $("#orderForm").onsubmit = submitOrder;

  // Global close on click outside or [data-close]
  document.addEventListener("click", e => {
    if (e.target.matches("[data-close]") || e.target.classList.contains("overlay")) {
      closeAll();
    }
  });

  // Global close on Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAll();
  });
}

// Initial Run
bindEvents();
renderGrid();
renderCart();
