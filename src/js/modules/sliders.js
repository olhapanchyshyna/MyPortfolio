function sliders(){
    function slider(slidesItem, sliderWrapperSelector, slidesFiledSelector, sliderSelector, dotSelector) {
        const slides = document.querySelectorAll(slidesItem);
        const sliderWrapper = document.querySelector(sliderWrapperSelector);
        const slidesFiled = document.querySelector(slidesFiledSelector);
        const slider = document.querySelector(sliderSelector);
        const dots = document.querySelectorAll(dotSelector);
        let slideIndex = 1;
        let offset = 0;
        let touchStartX = 0;
        let touchEndX = 0;
        let swipeThreshold = 50;
       
        stepSlider();
      
        window.addEventListener('resize', () => {
            stepSlider();
            handleResize();
        });

        function showDots(i = 0) {
            dots.forEach(dot => {
                dot.style.opacity = .5;
            })
            dots[i].style.opacity = 1;
          }

        function stepSlider() {
            const width = sliderWrapper.clientWidth + 'px';
      
            if (window.innerWidth <= 576) {
                slider.style.position = 'relative';
                slidesFiled.style.display = 'flex';
                slidesFiled.style.transition = '0.5s all';
                sliderWrapper.style.overflow = 'hidden';

                slides.forEach(item => {
                    item.style.width = width;
                });

                slidesFiled.style.width = 100 * slides.length + '%';
                showDots();

                function moveSlide (i) {
                    const width = sliderWrapper.clientWidth + 'px';

                    if(i == 1){
                        if (offset == (parseInt(width) * (slides.length - 1))) {
                            offset = 0;
                        } else {
                            offset += parseInt(width); 
                        }
            
                        slidesFiled.style.transform = `translateX(-${offset}px)`;
            
                        if (slideIndex == slides.length) {
                            slideIndex = 1;
                        } else {
                            slideIndex++;
                        }
                        
                    }else if(i == -1){
                        if (offset == 0) {
                            offset = parseInt(width) * (slides.length - 1);
                        } else {
                            offset -= parseInt(width);
                        }
            
                        slidesFiled.style.transform = `translateX(${-offset}px)`;
            
                        if (slideIndex == 1) {
                            slideIndex = slides.length;
                        } else {
                            slideIndex--;
                        }
                        
                    }

                    dots.forEach(dot => {
                        dot.style.opacity = '.5';
                    });
                    dots[slideIndex - 1].style.opacity = 1;
                    
                };

               // Пороговое значение для определения свайпа

                const handleTouchStart = (e) => touchStartX = e.touches[0].clientX;
                const handleTouchMove = (e) => touchEndX = touchEndX = e.touches[0].clientX;;
                

                function handleTouchEnd(){
                    let swipeLength = touchEndX - touchStartX;
                    // Свайп вправо - переключить на предыдущий слайд
                    if (swipeLength > swipeThreshold) moveSlide(-1);
                    // Свайп влево - переключить на следующий слайд
                    if (swipeLength < -swipeThreshold) moveSlide(1);

                };


                function handleResize(){
                    let screenWidth = window.innerWidth;

                    if (screenWidth > 577) {
                        // Удалите обработчики событий
                        sliderWrapper.removeEventListener('touchstart', handleTouchStart);
                        sliderWrapper.removeEventListener('touchmove', handleTouchMove);
                        sliderWrapper.removeEventListener('touchend', handleTouchEnd);
                    } else {
                        sliderWrapper.addEventListener('touchstart', handleTouchStart);
                        sliderWrapper.addEventListener('touchmove', handleTouchMove);
                        sliderWrapper.addEventListener('touchend', handleTouchEnd);
                    }
                }
                handleResize();

                dots.forEach(dot => {
                    dot.addEventListener('click', e => {
                        const slideTo = e.target.getAttribute('data-slide-to');
                        slideIndex = slideTo;

                        offset = parseInt(width) * (slideTo - 1);

                        slidesFiled.style.transform = `translateX(-${offset}px)`;

                        dots.forEach(dot => {
                            dot.style.opacity = '.5';
                        });
                        dots[slideIndex - 1].style.opacity = 1;
                    });
                });

            } else if(window.innerWidth >= 577){
                slidesFiled.style.display = 'grid';
                slides.forEach(item => {
                    item.style.width = '';
                });
                slidesFiled.style.width = '';
                slidesFiled.style.transform = '';
                slidesFiled.style.transition = '';
                sliderWrapper.style.overflow = '';
            }
        }
      
    }
    slider('.use__item', '.use__wrapper', '.use__list', '.use', '.use .dot');
    slider('.portfolio__item', '.portfolio__wrapper', '.portfolio__list', '.portfolio', '.portfolio .dot');      

}
export default sliders;


// ------------------------------------------------------------------------------


