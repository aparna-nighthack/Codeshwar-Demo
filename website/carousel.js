
class AI_Carousel {
    constructor(element) {
        this.carouselElement = document.querySelector(element);
        this.items = this.carouselElement.querySelectorAll('.carousel-item');
        this.totalItems = this.items.length;
        this.currentIndex = 0;
        this.bindEvents();
        this.updateCarousel();
    }

    bindEvents() {
        this.carouselElement.querySelector('.carousel-control-prev')
            .addEventListener('click', () => this.prevSlide());
        
        this.carouselElement.querySelector('.carousel-control-next')
            .addEventListener('click', () => this.nextSlide());
        
        // Swipe gestures for touch devices
        const hammer = new Hammer(this.carouselElement);
        hammer.on('swipeleft', () => this.nextSlide());
        hammer.on('swiperight', () => this.prevSlide());
    }

    updateCarousel() {
        this.items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex === 0) ? this.totalItems - 1 : this.currentIndex - 1;
        this.updateCarousel();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex === this.totalItems - 1) ? 0 : this.currentIndex + 1;
        this.updateCarousel();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AI_Carousel('#capabilitiesCarousel');
});
```
