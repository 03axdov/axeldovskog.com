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

function CSCourse(title, description, newID) {
    document.getElementById("cs-title").innerHTML = title;
    document.getElementById("cs-description").innerHTML = description;
    document.getElementById(currentCS).classList.remove('course-selected');
    currentCS = newID;
    document.getElementById(currentCS).classList.add('course-selected');
}

function IBCourse(title, description, newID) {
    document.getElementById("ib-title").innerHTML = title;
    document.getElementById("ib-description").innerHTML = description;
    document.getElementById(currentIB).classList.remove('course-selected');
    currentIB = newID;
    document.getElementById(currentIB).classList.add('course-selected');
}


function EDAA60() {
    title = "Computer Introduction";
    desc = "Covered the basics of Unix and Linux, LaTeX, as well as Git and GitHub.";
    CSCourse(title, desc, "EDAA60");
}

function EDAA45() {
    title = "Introduction to Programming";
    desc = "Covered the basics of programming algorithms, as well as the programming language Scala.";
    CSCourse(title, desc, "EDAA45");
}

function FMAB65() {
    title = "Calculus in One Variable B1";
    desc = "Mathematics course covering analytical geometry, trigonometry, limit values, etc.";
    CSCourse(title, desc, "FMAB65");
}

function FMAB70() {
    title = "Calculus in One Variable B2";
    desc = "Expands upon the prior Calculus Course.";
    CSCourse(title, desc, "FMAB70");
}

function EXTA65() {
    title = "Cognition";
    desc = "Covers design philosophy, e.g. how to make products intuitive.";
    CSCourse(title, desc, "EXTA65");
}

function FAFA60() {
    title = "Photonics";
    desc = "Physics concerning waves, such as light-and sound waves.";
    CSCourse(title, desc, "FAFA60");
}

function EDAA35() {
    title = "Evalution of Software Systems";
    desc = "Studying the design of software systems, as well as writing a project about a certain topic.";
    CSCourse(title, desc, "EDAA35");
}

function EDAA01() {
    title = "Programming Second Course";
    desc = "More advanced programming concepts using the Java programming language.";
    CSCourse(title, desc, "EDAA01");
}

function EDAA75() {
    title = "Discrete Structures";
    desc = "Different data structures, such as graphs and trees, as well as combinatorics.";
    CSCourse(title, desc, "EDAA75");
}

function FMAB20() {
    title = "Linear Algebra";
    desc = "Linear equation systems, matrices, vectors, etc.";
    CSCourse(title, desc, "FMAB20");
}

function EDAF60() {
    title = "Object-oriented Modelling and Design";
    desc = "More advanced object-oriented programming in Java, as well as different design patterns.";
    CSCourse(title, desc, "EDAF60");
}

function FMAB30() {
    title = "Calculus in Several Variables";
    desc = "Calculus course covering mainly multi-dimensional equation systems.";
    CSCourse(title, desc, "FMAB30");
}



function EKHB90() {
    title = "The Firm in a Historical Setting";
    desc = "Covers the history of the corporation, as well as financial crises and other economic events";
    IBCourse(title, desc, "EKHB90");
}

function IBUA51() {
    title = "International Business: Intercultural Competence";
    desc = "Covers different cultural frameworks as well as how to work with and manage intercultural teams.";
    IBCourse(title, desc, "IBUA51");
}

function IBUA10() {
    title = "Introduction to International Business";
    desc = "The basics of International Business, such as regulations, management, entry modes, etc.";
    IBCourse(title, desc, "IBUA10");
}

function IBUA21() {
    title = "International Business: International Marketing";
    desc = "Covers the marketing mix, including promotion, price, distribution, and the product itself.";
    IBCourse(title, desc, "IBUA21");
}

function IBUA61() {
    title = "International Business: Financial Accounting";
    desc = "Covers relatively in-depth accounting concepts.";
    IBCourse(title, desc, "IBUA61");
}