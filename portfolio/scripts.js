    // Smooth Scroll Animations
    const scrollElements = document.querySelectorAll('.js-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Hover Effects for Buttons and Cards
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseout', function() {
            button.classList.remove('hovered');
        });
    });

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.classList.add('card-hovered');
        });
        card.addEventListener('mouseout', function() {
            card.classList.remove('card-hovered');
        });
    });

    // Skill Bars Filling Animation
    const skillSection = document.getElementById('skills');

    const fillSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-bar');

        skillBars.forEach(bar => {
            const value = bar.dataset.skill;
            bar.style.width = value;
        });
    };

    const isInViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', () => {
        if (isInViewport(skillSection)) {
            fillSkillBars();
        }
    }, { once: true });
});