const scrollers = document.querySelectorAll(".scroller")

addAnimation();

currentCS = "EDAA60";
currentIB = "EKHB90"

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);
    
        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);
    
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    })
}