// ========================================
// MHZ Design Studio - Main JavaScript
// ========================================

// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: 'Modern Walnut Kitchen',
        category: 'Kitchen Design',
        description: 'Contemporary kitchen featuring warm walnut cabinetry with integrated appliances and premium finishes.',
        images: [
            'https://via.placeholder.com/600x400?text=Modern+Walnut+Kitchen+1',
            'https://via.placeholder.com/600x400?text=Modern+Walnut+Kitchen+2',
            'https://via.placeholder.com/600x400?text=Modern+Walnut+Kitchen+3'
        ],
        materials: 'Walnut wood, quartz countertops, stainless steel appliances',
        concept: 'Minimalist luxury kitchen combining functionality with elegant aesthetics'
    },
    {
        id: 2,
        title: 'Minimalist Living Space',
        category: 'Living Room',
        description: 'Spacious living area with clean lines, neutral tones, and premium furniture arrangement.',
        images: [
            'https://via.placeholder.com/600x400?text=Minimalist+Living+1',
            'https://via.placeholder.com/600x400?text=Minimalist+Living+2',
            'https://via.placeholder.com/600x400?text=Minimalist+Living+3'
        ],
        materials: 'Cream walls, natural wood flooring, contemporary furniture',
        concept: 'Open-plan living with emphasis on space, light, and elegant simplicity'
    },
    {
        id: 3,
        title: 'Luxury Condo Renovation',
        category: 'Full Renovation',
        description: 'Complete renovation of modern condo featuring integrated design throughout all spaces.',
        images: [
            'https://via.placeholder.com/600x400?text=Luxury+Condo+1',
            'https://via.placeholder.com/600x400?text=Luxury+Condo+2',
            'https://via.placeholder.com/600x400?text=Luxury+Condo+3'
        ],
        materials: 'Premium finishes, custom built-ins, modern fixtures',
        concept: 'Cohesive luxury design transforming residential space into premium living environment'
    },
    {
        id: 4,
        title: 'Elegant Dining Interior',
        category: 'Dining Room',
        description: 'Sophisticated dining space with custom furniture and warm ambient lighting.',
        images: [
            'https://via.placeholder.com/600x400?text=Elegant+Dining+1',
            'https://via.placeholder.com/600x400?text=Elegant+Dining+2',
            'https://via.placeholder.com/600x400?text=Elegant+Dining+3'
        ],
        materials: 'Walnut dining table, cream upholstery, ambient lighting',
        concept: 'Warm, inviting dining space perfect for entertaining and family gatherings'
    },
    {
        id: 5,
        title: 'Custom Wardrobe Design',
        category: 'Bedroom Storage',
        description: 'Bespoke wardrobe system maximizing storage with elegant design integration.',
        images: [
            'https://via.placeholder.com/600x400?text=Custom+Wardrobe+1',
            'https://via.placeholder.com/600x400?text=Custom+Wardrobe+2',
            'https://via.placeholder.com/600x400?text=Custom+Wardrobe+3'
        ],
        materials: 'Custom wood cabinetry, soft-close hardware, interior organization',
        concept: 'Tailored storage solution combining functionality with aesthetic appeal'
    },
    {
        id: 6,
        title: 'Commercial Office Upgrade',
        category: 'Commercial Design',
        description: 'Modern office space designed to enhance productivity and brand identity.',
        images: [
            'https://via.placeholder.com/600x400?text=Commercial+Office+1',
            'https://via.placeholder.com/600x400?text=Commercial+Office+2',
            'https://via.placeholder.com/600x400?text=Commercial+Office+3'
        ],
        materials: 'Professional finishes, ergonomic furniture, contemporary fixtures',
        concept: 'Professional workspace reflecting company values and promoting employee wellbeing'
    }
];

// ========== DOM Elements ==========
const header = document.getElementById('header');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const portfolioGrid = document.querySelector('.portfolio-grid');
const modal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');

// ========== Header Scroll Effect ==========
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== Mobile Menu Toggle ==========
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== Navigation Active State ==========
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === current) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNav();

// ========== Scroll Animations ==========
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Add fade-in-on-scroll class to elements
    const cards = document.querySelectorAll('.service-card, .stat-card, .feature-card, .portfolio-card');
    cards.forEach(card => {
        card.classList.add('fade-in-on-scroll');
        observer.observe(card);
    });
}

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);

// ========== Portfolio Grid Generation ==========
function generatePortfolioGrid() {
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
            <div class="portfolio-placeholder">
                [${project.category}]<br>
                Placeholder Image
            </div>
            <div class="portfolio-overlay">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-category">${project.category}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(project));
        portfolioGrid.appendChild(card);
    });
}

// ========== Portfolio Modal ==========
function openModal(project) {
    const modalImages = document.querySelector('.modal-images');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    
    // Clear previous content
    modalImages.innerHTML = '';
    
    // Add images
    project.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = project.title;
        modalImages.appendChild(imgElement);
    });
    
    // Update info
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;
    modalDetails.innerHTML = `
        <p><strong>Design Concept:</strong> ${project.concept}</p>
        <p><strong>Materials Used:</strong> ${project.materials}</p>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========== Contact Form Handling ==========
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `Hello MHZ Design Studio,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message: ${message}\n\n` +
        `I would like to discuss a design project with you.`
    );
    
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/601110604905?text=${whatsappMessage}`;
    
    // Reset form
    contactForm.reset();
});

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== Initialize Portfolio ==========
generatePortfolioGrid();

// ========== Lazy Load Images ==========
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ========== Performance: Debounce Scroll Events ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== Video Autoplay & Performance ==========
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-video');
    if (video) {
        // Attempt autoplay
        video.play().catch(error => {
            console.log('Video autoplay prevented:', error);
            // Fallback: video will still play on user interaction
        });
        
        // Optimize video loading
        video.addEventListener('loadstart', () => {
            console.log('Video loading started');
        });
        
        video.addEventListener('canplay', () => {
            console.log('Video ready to play');
        });
    }
});

// Pause video when not in viewport for performance
if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.25 });
    
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        videoObserver.observe(heroVideo);
    }
}

// ========== Print Friendly ==========
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

window.addEventListener('afterprint', () => {
    document.body.style.backgroundColor = '';
});

// ========== Console Message ==========
console.log('%cMHZ Design Studio', 'font-size: 24px; font-weight: bold; color: #A7633D;');
console.log('%cPremium Interior Design | Alor Setar, Kedah', 'font-size: 14px; color: #8A8178;');
console.log('%cWhatsApp: +60 11-1060 4905', 'font-size: 12px; color: #25D366;');
