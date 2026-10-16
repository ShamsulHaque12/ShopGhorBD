/**
 * ShopGhor BD - Admin Product Dashboard
 * Simple, Focused Product Add & Management Script
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'shopghor_bd_admin_products_v1';

  // State
  let products = [];

  // DOM Elements
  const elements = {
    form: document.getElementById('directProductForm'),
    title: document.getElementById('pTitle'),
    category: document.getElementById('pCategory'),
    badge: document.getElementById('pBadge'),
    regularPrice: document.getElementById('pRegularPrice'),
    salePrice: document.getElementById('pSalePrice'),
    stock: document.getElementById('pStock'),
    sizes: document.getElementById('pSizes'),
    imageUrl: document.getElementById('pImageUrl'),
    imageFile: document.getElementById('pImageFile'),
    imgPreview: document.getElementById('imgPreview'),
    desc: document.getElementById('pDesc'),
    tableBody: document.getElementById('adminProductsTableBody'),
    totalCount: document.getElementById('totalProductsCount'),
    logoutBtn: document.getElementById('adminLogoutBtn'),
    toastEl: document.getElementById('toast'),
    presetBtns: document.querySelectorAll('.preset-btn')
  };

  // Toast Helper
  let toastTimer;
  function showToast(msg) {
    if (!elements.toastEl) return;
    elements.toastEl.textContent = msg;
    elements.toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toastEl.classList.remove('show');
    }, 2800);
  }

  // Load Products from LocalStorage
  function loadProducts() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        products = JSON.parse(stored);
      } else {
        // Fallback default sample if empty
        products = [
          {
            id: 'prod_1',
            title: 'Premium Drop-Shoulder Heavy Cotton T-Shirt',
            name: 'Premium Drop-Shoulder Heavy Cotton T-Shirt',
            banglaName: 'প্রিমিয়াম ড্রপ-শোল্ডার কটন টি-শার্ট',
            category: 'Fashion',
            cat: 'fashion',
            regularPrice: 750,
            salePrice: 490,
            old: 750,
            price: 490,
            stock: 35,
            image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600',
            img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600',
            sizes: ['M', 'L', 'XL', 'XXL'],
            badge: 'বেস্ট সেলার',
            tags: ['বেস্ট সেলার'],
            description: '১০০% প্রিমিয়াম কম্বড কটন (220 GSM)। অত্যন্ত আরামদায়ক।'
          },
          {
            id: 'prod_2',
            title: 'Ultra AMOLED Bluetooth Calling Smartwatch',
            name: 'Ultra AMOLED Bluetooth Calling Smartwatch',
            banglaName: 'আল্ট্রা AMOLED ব্লুটুথ স্মার্টওয়াচ',
            category: 'Electronics',
            cat: 'electronics',
            regularPrice: 3800,
            salePrice: 2850,
            old: 3800,
            price: 2850,
            stock: 18,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
            img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
            sizes: ['Titanium Grey', 'Obsidian Black'],
            badge: 'হট ডিল',
            tags: ['হট ডিল'],
            description: 'সুপার ব্রাইট অ্যামোলেড ডিসপ্লে, ওয়্যারলেস চার্জিং ও ব্লুটুথ কলিং।'
          }
        ];
        saveProducts();
      }
    } catch (e) {
      console.error('Error loading products from storage:', e);
      products = [];
    }
    renderTable();
  }

  // Save Products
  function saveProducts() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
      console.error('Error saving to storage:', e);
    }
  }

  // Render Table
  function renderTable() {
    if (!elements.tableBody) return;

    if (elements.totalCount) {
      elements.totalCount.textContent = products.length;
    }

    if (products.length === 0) {
      elements.tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="empty-table-msg">
            📦 এখনও কোনো প্রোডাক্ট যোগ করা হয়নি। উপরের ফর্ম পূরণ করে নতুন প্রোডাক্ট যুক্ত করুন!
          </td>
        </tr>
      `;
      return;
    }

    elements.tableBody.innerHTML = products.map((item, index) => {
      const title = item.title || item.name || item.banglaName || 'Product';
      const cat = item.category || 'Fashion';
      const sale = item.salePrice || item.price || 0;
      const regular = item.regularPrice || item.old || sale;
      const img = item.image || item.img || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600';
      const badge = item.badge || (item.tags && item.tags[0]) || 'নতুন';
      const stock = item.stock || 10;

      return `
        <tr>
          <td>
            <div class="table-product-cell">
              <img src="${img}" alt="${title}" class="table-thumb" onerror="this.src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600'">
              <div class="table-prod-info">
                <span class="table-prod-title">${title}</span>
                <span style="font-size:0.75rem; color:var(--muted);">ID: ${item.id}</span>
              </div>
            </div>
          </td>
          <td>
            <span style="font-size:0.85rem; color:var(--ink-secondary); font-weight:500;">${cat}</span>
          </td>
          <td>
            <span class="table-price-now">৳${sale}</span>
            ${regular > sale ? `<span class="table-price-old">৳${regular}</span>` : ''}
          </td>
          <td>
            <span class="table-badge-pill">${badge}</span>
          </td>
          <td>
            <span style="font-weight:600; color:${stock <= 5 ? '#ef4444' : 'var(--ink-secondary)'};">${stock} টি</span>
          </td>
          <td style="text-align: right;">
            <button type="button" class="btn-action-delete" data-delete-id="${item.id}" title="প্রোডাক্ট মুছুন">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Attach delete listeners
    elements.tableBody.querySelectorAll('[data-delete-id]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-delete-id');
        deleteProduct(id);
      };
    });
  }

  // Delete Product
  function deleteProduct(id) {
    const item = products.find(p => String(p.id) === String(id));
    const title = item ? (item.title || item.name) : 'এই প্রোডাক্টটি';

    if (confirm(`আপনি কি নিশ্চিত যে "${title}" ডিলিট করতে চান?`)) {
      products = products.filter(p => String(p.id) !== String(id));
      saveProducts();
      renderTable();
      showToast('🗑️ প্রোডাক্ট ডিলিট করা হয়েছে!');
    }
  }

  // Add Product Form Submit
  function handleFormSubmit(e) {
    e.preventDefault();

    const title = (elements.title?.value || '').trim();
    const category = elements.category?.value || 'Fashion';
    const badge = elements.badge?.value || 'হট ডিল';
    const salePrice = Number(elements.salePrice?.value || 0);
    const regularPrice = Number(elements.regularPrice?.value || 0) || salePrice;
    const stock = Number(elements.stock?.value || 0) || 15;
    const sizesRaw = (elements.sizes?.value || '').trim();
    const imageUrl = (elements.imageUrl?.value || '').trim() || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600';
    const desc = (elements.desc?.value || '').trim();

    if (!title) {
      alert('অনুগ্রহ করে প্রোডাক্টের নাম লিখুন!');
      elements.title?.focus();
      return;
    }

    if (!salePrice || salePrice <= 0) {
      alert('অনুগ্রহ করে সঠিক বিক্রয় মূল্য লিখুন!');
      elements.salePrice?.focus();
      return;
    }

    // Parse sizes
    let sizes = ['Standard'];
    if (sizesRaw) {
      sizes = sizesRaw.split(',').map(s => s.trim()).filter(Boolean);
    } else if (category === 'Fashion') {
      sizes = ['M', 'L', 'XL', 'XXL'];
    }

    const newProduct = {
      id: 'prod_' + Date.now(),
      title: title,
      name: title,
      banglaName: title,
      category: category,
      cat: category.toLowerCase().includes('elect') ? 'electronics' : 'fashion',
      regularPrice: regularPrice,
      salePrice: salePrice,
      old: regularPrice,
      price: salePrice,
      stock: stock,
      sizes: sizes,
      image: imageUrl,
      img: imageUrl,
      badge: badge,
      tags: [badge],
      description: desc || '১০০% প্রিমিয়াম কোয়ালিটি পণ্য।',
      desc: desc || '১০০% প্রিমিয়াম কোয়ালিটি পণ্য।',
      rating: 5.0,
      reviewsCount: 1,
      createdAt: new Date().toISOString()
    };

    // Add to beginning of array
    products.unshift(newProduct);
    saveProducts();
    renderTable();

    // Reset Form Fields
    elements.form.reset();
    if (elements.pStock) elements.pStock.value = '25';
    if (elements.imageUrl) elements.imageUrl.value = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600';
    if (elements.imgPreview) elements.imgPreview.src = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600';

    showToast('🎉 নতুন প্রোডাক্ট সফলভাবে শপে যুক্ত হয়েছে!');
    window.scrollTo({ top: elements.form.offsetTop - 80, behavior: 'smooth' });
  }

  // Image URL input changes
  if (elements.imageUrl) {
    elements.imageUrl.addEventListener('input', () => {
      const url = elements.imageUrl.value.trim();
      if (elements.imgPreview && url) {
        elements.imgPreview.src = url;
      }
    });
  }

  // File Upload Handling (FileReader)
  if (elements.imageFile) {
    elements.imageFile.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target.result;
          if (elements.imgPreview) elements.imgPreview.src = result;
          if (elements.imageUrl) elements.imageUrl.value = result;
          showToast('📸 ছবি সিলেক্ট করা হয়েছে!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Quick Preset Buttons
  if (elements.presetBtns) {
    elements.presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const img = btn.getAttribute('data-img');
        if (img) {
          if (elements.imageUrl) elements.imageUrl.value = img;
          if (elements.imgPreview) elements.imgPreview.src = img;
          elements.presetBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  }

  // Form Submit Listener
  if (elements.form) {
    elements.form.addEventListener('submit', handleFormSubmit);
  }

  // Logout Listener
  if (elements.logoutBtn) {
    elements.logoutBtn.addEventListener('click', () => {
      if (confirm('আপনি কি নিশ্চিত যে অ্যাডমিন প্যানেল থেকে লগআউট করতে চান?')) {
        sessionStorage.removeItem('shopghor_admin_session');
        localStorage.removeItem('shopghor_admin_logged_in');
        window.location.href = '../index.html';
      }
    });
  }

  // Initialize
  loadProducts();

})();
