// Global JavaScript for Unsettle theme

class ThemeEvents {
  constructor() {
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupMobileMenu();
    this.setupProductImageZoom();
    this.setupCartFunctionality();
    this.setupWishlist();
    this.setupAnimations();
  }

  // Smooth scrolling for anchor links
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Mobile menu functionality
  setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
      });
    }
  }

  // Product image zoom functionality
  setupProductImageZoom() {
    const productImages = document.querySelectorAll('.product-image-zoom');
    
    productImages.forEach(image => {
      image.addEventListener('click', () => {
        this.openImageModal(image.src);
      });
    });
  }

  openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
      <div class="image-modal__backdrop">
        <div class="image-modal__content">
          <img src="${imageSrc}" alt="Product Image">
          <button class="image-modal__close">&times;</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.image-modal__close');
    const backdrop = modal.querySelector('.image-modal__backdrop');
    
    closeBtn.addEventListener('click', () => this.closeImageModal(modal));
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        this.closeImageModal(modal);
      }
    });
  }

  closeImageModal(modal) {
    modal.remove();
  }

  // Cart functionality
  setupCartFunctionality() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.addToCart(button);
      });
    });
  }

  async addToCart(button) {
    const form = button.closest('form');
    const formData = new FormData(form);
    
    button.disabled = true;
    button.textContent = 'Adding...';
    
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const item = await response.json();
        this.showCartNotification('Item added to cart!');
        this.updateCartCount();
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      this.showCartNotification('Error adding item to cart', 'error');
    } finally {
      button.disabled = false;
      button.textContent = 'Add to Cart';
    }
  }

  showCartNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `cart-notification cart-notification--${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const cartCount = document.querySelector('.cart-count');
      
      if (cartCount) {
        cartCount.textContent = cart.item_count;
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  // Wishlist functionality
  setupWishlist() {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleWishlist(button);
      });
    });
  }

  toggleWishlist(button) {
    const productId = button.dataset.productId;
    const isActive = button.classList.contains('active');
    
    if (isActive) {
      this.removeFromWishlist(productId);
      button.classList.remove('active');
    } else {
      this.addToWishlist(productId);
      button.classList.add('active');
    }
  }

  addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }

  removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  // Scroll animations
  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }
}

// Utility functions
class Utils {
  static formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    
    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || '${{amount}}';
    
    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';
      
      if (isNaN(number) || number === null) {
        return 0;
      }
      
      number = (number / 100.0).toFixed(precision);
      
      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const centsAmount = parts[1] ? (decimal + parts[1]) : '';
      
      return dollarsAmount + centsAmount;
    }
    
    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }
    
    return formatString.replace(placeholderRegex, value);
  }

  static debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeEvents();
});

// Export for use in other scripts
window.ThemeEvents = ThemeEvents;
window.Utils = Utils;

