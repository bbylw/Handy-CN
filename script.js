// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // ===== Smooth Scroll for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu if open
            if (navLinks) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // ===== Typing Animation for Hero =====
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const texts = [
            '这是 Handy，',
            '一个语音转文字工具...',
            '按下快捷键开始说话，',
            '松开即可获取转录文本。'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before typing
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing animation
        setTimeout(type, 1000);
    }
    
    // ===== Scroll Reveal Animation =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .step, .download-card, .faq-item, .lib-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add revealed class styles
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ===== Navbar Background on Scroll =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(15, 15, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 15, 26, 0.8)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== Copy Command on Click =====
    document.querySelectorAll('.install-cmd').forEach(cmd => {
        cmd.style.cursor = 'pointer';
        cmd.title = '点击复制';
        
        cmd.addEventListener('click', () => {
            navigator.clipboard.writeText(cmd.textContent).then(() => {
                const originalText = cmd.textContent;
                cmd.textContent = '已复制!';
                cmd.style.background = 'rgba(34, 197, 94, 0.2)';
                cmd.style.color = '#22c55e';
                
                setTimeout(() => {
                    cmd.textContent = originalText;
                    cmd.style.background = '';
                    cmd.style.color = '';
                }, 2000);
            });
        });
    });
    
    // ===== Stats Counter Animation =====
    const statValues = document.querySelectorAll('.stat-value');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue.includes('%')) {
                    animateNumber(target, 100, '%');
                } else if (!isNaN(parseInt(finalValue))) {
                    animateNumber(target, parseInt(finalValue), '');
                }
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => statsObserver.observe(stat));
    
    function animateNumber(element, target, suffix) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    }
    
    // ===== Parallax Effect for Orbs =====
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (!window.matchMedia('(pointer: coarse)').matches) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }
});
