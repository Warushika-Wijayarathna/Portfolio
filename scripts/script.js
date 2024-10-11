document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.slide');

    // Make the second slide active on page load
    if (slides.length > 1) {
        slides[1].classList.add('active');
    }

    for (let slide of slides) {
        slide.addEventListener('click', () => {
            allSliderClassRemove('active');
            slide.classList.add('active');
        });
    }

    function allSliderClassRemove(className) {
        slides.forEach(slide => {
            slide.classList.remove(className);
        });
    }
});