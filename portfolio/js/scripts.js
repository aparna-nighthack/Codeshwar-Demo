document.addEventListener("DOMContentLoaded", function () {
    // Smooth fade-ins and slide-up animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInUp = (element) => {
        element.classList.add('fade-in-up');
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeInUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up-on-scroll').forEach(section => {
        observer.observe(section);
    });

    // Subtle hover effects on buttons and project cards
    document.querySelectorAll('.btn, .project-card').forEach(element => {
        element.addEventListener('mouseenter', function () {
            element.classList.add('hover-effect');
        });

        element.addEventListener('mouseleave', function () {
            element.classList.remove('hover-effect');
        });
    });

    // Animated skill bars filling dynamically on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(skillBar => {
        const fillSkillBar = () => {
            const percentage = skillBar.dataset.percentage;
            skillBar.style.width = percentage;
        };

        const skillObserver = new IntersectionObserver((entries, skillObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fillSkillBar();
                    skillObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillObserver.observe(skillBar);
    });
});