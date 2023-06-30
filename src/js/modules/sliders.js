function sliders() {
    function firstScreenSlider(items, dotSelector, sliderSelector, activeDots) {
        const   slides = document.querySelectorAll(items),
                dots = document.querySelectorAll(dotSelector);
        let index = 0;

        // ------------------------------------------------------------------- move slide

        function moveSlide(i) {
            slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
            slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
            if (i === 1) slides[index].classList.add('animate__fadeOutLeft');
            if (i === -1) slides[index].classList.add('animate__fadeOutRight');

            index += i;

            if (index > slides.length - 1) index = 0;
            if (index < 0) index = slides.length - 1;

            setTimeout(() => {
                slides.forEach(slide => slide.classList.remove('slide_active'));
                slides[index].classList.add('slide_active');
            }, 300);

            slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
            slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
            if (i === 1) slides[index].classList.add('animate__slideInRight');
            if (i === -1) slides[index].classList.add('animate__slideInLeft');

            dots.forEach(dot => dot.classList.remove(activeDots));
            dots[index].classList.add(activeDots);
        };


        // ---------------------------------------------------------------------- Dots

        function moveSlideDots() {
            slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
            slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
            slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
            slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
            slides.forEach(slide => slide.classList.remove('slide_active'));
            slides[index].classList.add('slide_active');

            dots.forEach(dot => dot.classList.remove(activeDots));
            dots[index].classList.add(activeDots);
        };

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                index = i;
                moveSlideDots();
            });
        });

        // ----------------------------------------------------------------------- Touch

        let slider = document.querySelector(sliderSelector);
        let touchStartX = 0;
        let touchEndX = 0;
        let swipeThreshold = 50;

        const handleTouchStart = (e) => touchStartX = e.touches[0].clientX;
        const handleTouchMove = (e) => touchEndX = touchEndX = e.touches[0].clientX;
        const handleTouchEnd = () => {
            console.log('hi')
            let swipeLength = touchEndX - touchStartX;
            if (swipeLength > swipeThreshold) moveSlide(-1);
            if (swipeLength < -swipeThreshold) moveSlide(1);
        };

        let eventHandlersActive = false; // Переменная для хранения состояния обработчиков событий

        const activateEventHandlers = () => {
            slider.addEventListener('touchstart', handleTouchStart);
            slider.addEventListener('touchmove', handleTouchMove);
            slider.addEventListener('touchend', handleTouchEnd);
            eventHandlersActive = true;
        };

        const deactivateEventHandlers = () => {
            slider.removeEventListener('touchstart', handleTouchStart);
            slider.removeEventListener('touchmove', handleTouchMove);
            slider.removeEventListener('touchend', handleTouchEnd);
            eventHandlersActive = false;
        };

        const handleResize = () => {
            let screenWidth = window.innerWidth;

            if (screenWidth > 649.98 && eventHandlersActive) deactivateEventHandlers();
            if (screenWidth <= 649.98 && !eventHandlersActive) activateEventHandlers();

        }
        handleResize();
        window.addEventListener('resize', handleResize);

    };
    firstScreenSlider('.use__item', '.use .dot', '.use__wrapper','slick-active');
    firstScreenSlider('.portfolio__item', '.portfolio .dot', '.portfolio__wrapper','slick-active');
}
export default sliders;


// ------------------------------------------------------------------------------