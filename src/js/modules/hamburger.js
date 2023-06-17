function hamburger(openSelector,closeSelector,menuSelector,menuContectSelector){
    const openBtn = document.querySelector(openSelector);
    const closeBtn = document.querySelector(closeSelector);
    const menu = document.querySelector(menuSelector);
    const menuContect = document.querySelector(menuContectSelector);
    const menuOverlay = document.querySelector('.menu__overlay');
    const itemWrapper = document.querySelector('.menu__list');

    function open(){
        menu.style.display = 'flex'
    }
    function close(){
        menu.style.display = 'none'
    }
    close();

    itemWrapper.addEventListener('click', (e) => {
        if(e.target.classList.contains('menu__item_link')){
            setTimeout(() => {
                menuContect.classList.remove('animate__fadeInLeft');
                menuContect.classList.add('animate__fadeOutLeft');

                menuOverlay.classList.remove('animate__fadeIn');
                menuOverlay.classList.add('animate__fadeOut');
            
                setTimeout(() => {
                    close();
                },1000)
            },1000)
        }
    })

    openBtn.addEventListener('click', () =>{
        open();

        menuContect.classList.add('animate__fadeInLeft');
        menuContect.classList.remove('animate__fadeOutLeft');

        menuOverlay.classList.add('animate__fadeIn');
        menuOverlay.classList.remove('animate__fadeOut');
    })
    
    closeBtn.addEventListener('click', () => {

        menuContect.classList.remove('animate__fadeInLeft');
        menuContect.classList.add('animate__fadeOutLeft');

        menuOverlay.classList.remove('animate__fadeIn');
        menuOverlay.classList.add('animate__fadeOut');
       
        setTimeout(() => {
            close();
        },1000)
    })

}
export default hamburger;