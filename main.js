const scrollers = document.querySelectorAll(".scroller")

addAnimation();

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

function CSCourse(title, description) {
    document.getElementById("cs-title").innerHTML = title;
    document.getElementById("cs-description").innerHTML = description;
}

function EDAA60() {
    title = "Computer Introduction";
    desc = "Covered the basics of Unix and Linux, LaTeX, as well as Git and GitHub.";
    CSCourse(title, desc);
}

function EDAA45() {
    title = "Introduction to Programming";
    desc = "Covered the basics of programming algorithms, as well as the programming language Scala.";
    CSCourse(title, desc);
}

function FMAB65() {
    title = "Calculus in One Variable B1";
    desc = "Mathematics course covering analytical geometry, trigonometry, limit values, etc.";
    CSCourse(title, desc);
}