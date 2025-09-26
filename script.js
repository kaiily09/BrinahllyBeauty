// Elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginLink = document.getElementById('login-link');
const cadastroLink = document.getElementById('cadastro-link');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const closeModals = document.querySelectorAll('.close-modal');
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

// Menu Mobile
menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

// Modal Functions
function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners for Modals
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
});

cadastroLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(registerModal);
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(loginModal);
    openModal(registerModal);
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(registerModal);
    openModal(loginModal);
});

closeModals.forEach(close => {
    close.addEventListener('click', () => {
        closeModal(loginModal);
        closeModal(registerModal);
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) closeModal(loginModal);
    if (e.target === registerModal) closeModal(registerModal);
});

// Cart Functionality
let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        cartItems++;
        cartCount.textContent = cartItems;
        
        const productName = button.closest('.product-card').querySelector('h3').textContent;
        
        // Show success message
        showNotification(`"${productName}" adicionado ao carrinho!`);
    });
});

// Notification Function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Form Submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    // Simulate login
    if (email && password) {
        showNotification('Login realizado com sucesso!');
        closeModal(loginModal);
    }
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = e.target.querySelector('input[type="password"]').value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        showNotification('As senhas não coincidem!');
        return;
    }
    
    showNotification('Cadastro realizado com sucesso!');
    closeModal(registerModal);
});

// Newsletter Form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    showNotification(`Obrigada por se cadastrar! Enviamos uma confirmação para: ${email}`);
    e.target.reset();
});

// Smooth Scroll for Anchor Links
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

// Search Functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            showNotification(`Buscando por: ${searchTerm}`);
            // Here you would typically redirect to search results page
        }
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Brinahlly Beauty - Site carregado com sucesso!');
});