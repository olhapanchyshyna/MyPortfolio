function indicator(spanSelector,persentsSelector){
    const span = document.querySelectorAll(spanSelector);
    const persents = document.querySelectorAll(persentsSelector);

    persents.forEach((item,i) => {
        span[i].style.width = item.innerHTML
    })
    
}
export default indicator;