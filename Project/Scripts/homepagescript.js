document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector(".sec1_carousel");
    const buttons = document.querySelectorAll("[data-carousel-button]");
    let autoSlideInterval = null;
    let isTransitioning = false;

    function handleSlideChange(offset) {
        if (isTransitioning) return;
        isTransitioning = true;

        const slides = carousel.querySelectorAll(".slide");
        const activeSlide = carousel.querySelector("[data-active]");
        
        let newIndex = [...slides].indexOf(activeSlide) + offset;
        
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        
        slides[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    function startAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        autoSlideInterval = setInterval(() => {
            handleSlideChange(1);
        }, 5000);
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
            
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            handleSlideChange(offset);
            
            startAutoSlide();
        });
    });

    startAutoSlide();

    carousel.addEventListener('mouseenter', () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});