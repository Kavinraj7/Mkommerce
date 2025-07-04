const banner = document.getElementById("bannercontainer");4


let scrollAmount = 0;
let scrollStep = 1085;
let maxScroll = banner.scrollWidth - banner.clientWidth;
let direction = 1; 
let timerDelay = 3000;
let autoScrollTimer = setInterval(autoScroll, timerDelay);
const prof_tab = document.getElementById("profilebar")
const maincontents = document.getElementById("contents")

function autoScroll() {
    scrollAmount += scrollStep * direction;

    if (scrollAmount >= maxScroll) {
        scrollAmount = maxScroll;
        direction = -1; 
    } else if (scrollAmount <= 0) {
        scrollAmount = 0;
        direction = 1; 
    }

    banner.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}

function resetAutoScrollTimer() {
    clearInterval(autoScrollTimer);
    autoScrollTimer = setTimeout(() => {
        autoScrollTimer = setInterval(autoScroll, timerDelay);
    }, 5000); 
}

// Left scroll on click
function leftroll() {
    banner.scrollBy({ left: -scrollStep, behavior: "smooth" });
    scrollAmount = banner.scrollLeft; 
    resetAutoScrollTimer();
}

// Right scroll on click
function rightroll() {
    banner.scrollBy({ left: scrollStep, behavior: "smooth" });
    scrollAmount = banner.scrollLeft; 
    resetAutoScrollTimer();
}

function profilebar(){
    prof_tab.style.display = "flex";
    maincontents.classList.add("blurred")
    document.body.classList.add("noscroll")
}

function closeProfilebar() {
    prof_tab.style.display = "none";                
    maincontents.classList.remove("blurred");        
    document.body.classList.remove("noscroll");    
}