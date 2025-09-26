// Ensure a single global cvData — only create if not already defined
if (typeof cvData === 'undefined') {
    window.cvData = null;
}

document.addEventListener('DOMContentLoaded', function() {
    // cv data are loaded in cv-data.js
    populateContent();
    initializeFeatures();
});

// Populate all content from CV data
function populateContent() {
    if (!cvData) return;

    // Basic text content
    populateTextContent();
    
    // Images
    populateImages();
    
    // About section
    populateAboutSection();
    
    // Experience timeline
    populateExperience();
    
    // Education section
    populateEducation();
    
    // Skills section
    populateSkills();
    
    // Projects section
    populateProjects();
    
    // Social links
    populateSocialLinks();
}

// Helper function to get nested object property
function getNestedProperty(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// Populate text content using data attributes
function populateTextContent() {
    const textElements = document.querySelectorAll('[data-content]');
    textElements.forEach(element => {
        const path = element.getAttribute('data-content');
        const content = getNestedProperty(cvData, path);
        if (content) {
            element.textContent = content;
        }
    });
}

// Populate images using data attributes
function populateImages() {
    const imgElements = document.querySelectorAll('[data-img]');
    imgElements.forEach(element => {
        const path = element.getAttribute('data-img');
        const altPath = element.getAttribute('data-alt');
        const src = getNestedProperty(cvData, path);
        const alt = altPath ? getNestedProperty(cvData, altPath) : '';
        
        if (src) {
            element.src = src;
            if (alt) element.alt = alt;
        }
    });
}

// Populate about section
function populateAboutSection() {
    const leftList = document.getElementById('aboutLeft');
    const rightList = document.getElementById('aboutRight');
    
    if (leftList && rightList) {
        leftList.innerHTML = `
            <li><strong>Name:</strong> ${cvData.personalInfo.fullName}</li>
            <li><strong>Age:</strong> ${cvData.personalInfo.age}</li>
            <li><strong>Location:</strong> ${cvData.personalInfo.location}</li>
        `;
        
        rightList.innerHTML = `
            <li><strong>Email:</strong> ${cvData.personalInfo.email}</li>
            <li><strong>Languages:</strong> ${cvData.personalInfo.languages.join(', ')}</li>
        `;
    }
}

// Populate experience timeline
function populateExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;

    timeline.innerHTML = cvData.workExperience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-content">
                <h4>${exp.position}</h4>
                <h5 class="text-primary">${exp.company}</h5>
                <span class="timeline-date">${exp.period}</span>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// Populate education section
function populateEducation() {
    const container = document.getElementById('educationContainer');
    if (!container) return;

    container.innerHTML = cvData.education.map((edu, index) => `
        <div class="education-item ${index < cvData.education.length - 1 ? 'mb-4' : ''}">
            <div class="card">
                <div class="card-body">
                    <h4>${edu.degree}</h4>
                    <h5 class="text-primary">${edu.institution}</h5>
                    <span class="text-muted">${edu.period}</span>
                    <p class="mt-2">${edu.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate skills section
function populateSkills() {
    // Technical skills with progress bars
    const technicalContainer = document.getElementById('technicalSkills');
    if (technicalContainer) {
        technicalContainer.innerHTML = cvData.skills.technical.map(skill => `
            <div class="skill-item mb-3">
                <div class="d-flex justify-content-between">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }

    // Tools and technologies
    const toolsContainer = document.getElementById('toolsSkills');
    if (toolsContainer) {
        toolsContainer.innerHTML = cvData.skills.tools.map(tool => `
            <div class="col-6 mb-3">
                <span class="badge bg-primary p-2">${tool}</span>
            </div>
        `).join('');
    }
}

// Populate projects section
function populateProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = cvData.projects.map(project => `
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="d-flex gap-2">
                        <a href="${project.demoUrl}" class="btn btn-primary btn-sm">Live Demo</a>
                        <a href="${project.githubUrl}" class="btn btn-outline-primary btn-sm">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate social links
function populateSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;

    const socialIcons = {
        linkedin: 'fab fa-linkedin',
        github: 'fab fa-github',
    };

    container.innerHTML = Object.entries(cvData.socialLinks).map(([platform, url]) => `
        <a href="${url}" class="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i class="${socialIcons[platform]} fa-2x"></i>
        </a>
    `).join('');
}

// Initialize all features after content is loaded
function initializeFeatures() {
    initSmoothScrolling();
    initActiveNavigation();
    initProgressBarAnimation();
    initScrollAnimations();
    initContactForm();
    initTypeWriter();
    initParallaxEffect();
    initCardHoverEffects();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// Animate progress bars when skills section is in view
function initProgressBarAnimation() {
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Animate elements on scroll
function initScrollAnimations() {
    const elements = document.querySelectorAll('.timeline-item, .card, .skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!name || !email || !subject || !message) {
                showAlert('Please fill in all fields.', 'danger');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAlert('Please enter a valid email address.', 'danger');
                return;
            }
            
            showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Typing effect for hero section
function initTypeWriter() {
    if (!cvData) return;
    
    const text = cvData.personalInfo.title;
    const element = document.querySelector('.hero-section h2');
    
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Add hover effects to cards
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show alert function
function showAlert(message, type) {
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Export function to update CV data (for potential admin interface)
function updateCVData(newData) {
    cvData = { ...cvData, ...newData };
    populateContent();
    console.log('CV data updated successfully');
}

// Make updateCVData available globally for potential use
window.updateCVData = updateCVData;
