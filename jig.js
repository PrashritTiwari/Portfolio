// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Scroll Animations (Fade In Effects)
const scrollElements = document.querySelectorAll('.fade-in');
const animateOnScroll = () => {
    scrollElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
};

// Trigger Scroll Animations on Scroll Event
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Ensure animation triggers on page load

// Hero Section Typing Animation
const heroText = document.querySelector('.hero h1');
const typingEffect = (text, element) => {
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
};

// Start Typing Effect
if (heroText) {
    typingEffect("Hello, I'm Prashrit", heroText);
}

// Parallax Scrolling for Background Video (Optional, creates a sense of depth)
const heroVideo = document.querySelector('.hero-video video');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});

// Image Hover Effects (For Projects Section)
const projectImages = document.querySelectorAll('.project img');
projectImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Button Hover Effects (For CTA Buttons)
const buttons = document.querySelectorAll('.cta-btn, .contact-form button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#ff4c3b'; // Darker shade on hover
        button.style.transition = 'background-color 0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#ff6f61'; // Default button color
    });
});

// Animate the skill bars as they come into view
const skillBars = document.querySelectorAll('.skill-bar');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (barPosition < screenPosition) {
            bar.style.width = bar.getAttribute('data-skill') + '%'; // Animate width based on data attribute
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#ff4c3b'; // Change border color to red if input is empty
                valid = false;
            } else {
                input.style.borderColor = '#ddd'; // Reset border color if valid
            }
        });

        if (valid) {
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Scroll to Top Button (optional for better user experience)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show Scroll to Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
