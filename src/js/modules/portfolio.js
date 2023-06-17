function portfolio(cardsSelector,hidentextSelector){
    const   cards = document.querySelectorAll(cardsSelector),
            hidentext = document.querySelectorAll(hidentextSelector);

    function hideText(){
        hidentext.forEach(item => {
            item.style.display = 'none'
        })
    }
    hideText();

    cards.forEach((card,i) => {
        card.addEventListener('mouseover',() =>{
            // hideText();
            hidentext[i].style.display = 'flex';
            hidentext[i].classList.add('animate__animated', 'animate__fadeIn');
            hidentext[i].classList.remove('animate__fadeOut');
        })
        card.addEventListener('mouseleave',() =>{
            hidentext[i].classList.remove('animate__fadeIn');
            hidentext[i].classList.add('animate__fadeOut');
        })

    })
    

}
export default portfolio;