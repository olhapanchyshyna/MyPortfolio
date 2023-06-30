function sliders() {

    // function slider(slidesItem, sliderWrapperSelector, slidesFiledSelector, sliderSelector, dotSelector) {
    //     const slides = document.querySelectorAll(slidesItem);
    //     const sliderWrapper = document.querySelector(sliderWrapperSelector);
    //     const slidesFiled = document.querySelector(slidesFiledSelector);
    //     const slider = document.querySelector(sliderSelector);
    //     const dots = document.querySelectorAll(dotSelector);
    //     let slideIndex = 1;
    //     let offset = 0;
    //     let touchStartX = 0;
    //     let touchEndX = 0;
    //     let swipeThreshold = 50; 




    //     window.addEventListener('resize', () => {
    //         stepSlider();
    //     });

    //     function showDots(i = 0) {
    //         dots.forEach(dot =>{
    //             dot.style.opacity = 0.5;
    //         })
    //         dots[i].style.opacity = 1;
    //     }

    //     stepSlider();
    //     function stepSlider() {
    //       const width = sliderWrapper.clientWidth + 'px';

    //         if (window.innerWidth <= 576) {
    //             slider.style.position = 'relative';
    //             slidesFiled.style.display = 'flex';
    //             slidesFiled.style.transition = '0.5s all';
    //             sliderWrapper.style.overflow = 'hidden';

    //             slides.forEach(item => {
    //                 item.style.width = width;
    //             });

    //             slidesFiled.style.width = 100 * slides.length + '%';
    //             showDots();

    //             dots.forEach(dot => {
    //                 dot.addEventListener('click', e => {
    //                     const slideTo = e.target.getAttribute('data-slide-to');
    //                     slideIndex = slideTo;

    //                     offset = parseInt(width) * (slideTo - 1);

    //                     slidesFiled.style.transform = `translateX(-${offset}px)`;

    //                     dots.forEach(dot => {
    //                         dot.style.opacity = '.5';
    //                     });
    //                     dots[slideIndex - 1].style.opacity = 1;
    //                 });
    //             });


    //             function moveSlide (i) {
    //                 const width = sliderWrapper.clientWidth + 'px';

    //                 if(i == 1){
    //                     if (offset == (parseInt(width) * (slides.length - 1))) { //650    px
    //                         offset = 0;
    //                     } else {
    //                         offset += parseInt(width); 
    //                     }

    //                     slidesFiled.style.transform = `translateX(-${offset}px)`;

    //                     if (slideIndex == slides.length) {
    //                         slideIndex = 1;
    //                     } else {
    //                         slideIndex++;
    //                     }


    //                 }else if(i == -1){
    //                     if (offset == 0) {
    //                         offset = parseInt(width) * (slides.length - 1);
    //                     } else {
    //                         offset -= parseInt(width);
    //                     }

    //                     slidesFiled.style.transform = `translateX(${-offset}px)`;

    //                     if (slideIndex == 1) {
    //                         slideIndex = slides.length;
    //                     } else {
    //                         slideIndex--;
    //                     }

    //                 }

    //                 dots.forEach(dot => {
    //                     dot.style.opacity = '.5';
    //                 });
    //                 dots[slideIndex - 1].style.opacity = 1;

    //             };


    //             // Пороговое значение для определения свайпа

    //             function handleTouchStart(e){
    //                 touchStartX = e.touches[0].clientX;
    //             } 
    //             function handleTouchMove(e) {
    //                 touchEndX = touchEndX = e.touches[0].clientX;
    //             } 


    //             function handleTouchEnd(){
    //                 let swipeLength = touchEndX - touchStartX;
    //                 // Свайп вправо - переключить на предыдущий слайд
    //                 if (swipeLength > swipeThreshold) moveSlide(-1);
    //                 // Свайп влево - переключить на следующий слайд
    //                 if (swipeLength < -swipeThreshold) moveSlide(1);

    //             };


    //             function handleResize(){

    //                 let screenWidth = window.innerWidth;

    //                 if (screenWidth > 577) {
    //                     // Удалите обработчики событий
    //                     sliderWrapper.removeEventListener('touchstart', handleTouchStart);
    //                     sliderWrapper.removeEventListener('touchmove', handleTouchMove);
    //                     sliderWrapper.removeEventListener('touchend', handleTouchEnd);
    //                 } else {
    //                     sliderWrapper.addEventListener('touchstart', handleTouchStart);
    //                     sliderWrapper.addEventListener('touchmove', handleTouchMove);
    //                     sliderWrapper.addEventListener('touchend', handleTouchEnd);
    //                 }
    //             }
    //             handleResize();
    //             window.addEventListener('resize', handleResize);

    //                 }else if(window.innerWidth >= 577){
    //                     slidesFiled.style.display = 'grid';
    //                     slides.forEach(item => {
    //                         item.style.width = '';
    //                     });
    //                     slidesFiled.style.width = '';
    //                     slidesFiled.style.transform = '';
    //                     slidesFiled.style.transition = '';
    //                     sliderWrapper.style.overflow = '';
    //                 }
    //             }


    // }
    // slider('.use__item', '.use__wrapper', '.use__list', '.use', '.use .dot');
    // slider('.portfolio__item', '.portfolio__wrapper', '.portfolio__list', '.portfolio', '.portfolio .dot');


    function firstScreenSlider(items, dotSelector, sliderSelector, activeDots) {
        const slides = document.querySelectorAll(items),
            dots = document.querySelectorAll(dotSelector);
        let index = 0;

        // ------------------------------------------------------------------- move slide

        function moveSlide(i) {
            // slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
            // slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
            // if (i === 1) slides[index].classList.add('animate__fadeOutLeft');
            // if (i === -1) slides[index].classList.add('animate__fadeOutRight');

            index += i;

            if (index > slides.length - 1) index = 0;
            if (index < 0) index = slides.length - 1;

            setTimeout(() => {
                slides.forEach(slide => slide.classList.remove('slide_active'));
                slides[index].classList.add('slide_active');
            }, 300);

            // slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
            // slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
            // if (i === 1) slides[index].classList.add('animate__slideInRight');
            // if (i === -1) slides[index].classList.add('animate__slideInLeft');

            dots.forEach(dot => dot.classList.remove(activeDots));
            dots[index].classList.add(activeDots);
        };


        // ---------------------------------------------------------------------- Dots

        function moveSlideDots() {
            // slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
            // slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
            // slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
            // slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
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

    //Информация - код навален без оптимизации и лаконичности. Есть много чего оптимизировать.

    firstScreenSlider('.use__item', '.use .dot', '.use__wrapper','slick-active');
    firstScreenSlider('.portfolio__item', '.portfolio .dot', '.portfolio__wrapper','slick-active');


}
export default sliders;


// ------------------------------------------------------------------------------