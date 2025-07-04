const banner = document.getElementById("bannercontainer");

let scrollAmount = 0;
let direction = 1;
let timerDelay = 3000;
let scrollStep;

window.addEventListener("load", () => {
    const firstCard = banner.querySelector(".off1");
    const cardStyles = window.getComputedStyle(firstCard);
    const cardWidth = firstCard.offsetWidth;
    const gap = parseInt(getComputedStyle(banner).columnGap) || 0;

    scrollStep = cardWidth + gap;

    maxScroll = banner.scrollWidth - banner.clientWidth;

    autoScrollTimer = setInterval(autoScroll, timerDelay);
});

let autoScrollTimer;

function autoScroll() {
    scrollAmount = banner.scrollLeft + scrollStep * direction;

    const maxScroll = banner.scrollWidth - banner.clientWidth;

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

banner.addEventListener("scroll", () => {
    scrollAmount = banner.scrollLeft;
});

function resetAutoScrollTimer() {
    clearInterval(autoScrollTimer);
    autoScrollTimer = setTimeout(() => {
        autoScrollTimer = setInterval(autoScroll, timerDelay);
    }, 5000); 
}

function leftroll() {
    banner.scrollBy({ left: -scrollStep, behavior: "smooth" });
    scrollAmount = banner.scrollLeft;
    resetAutoScrollTimer();
}

function rightroll() {
    banner.scrollBy({ left: scrollStep, behavior: "smooth" });
    scrollAmount = banner.scrollLeft;
    resetAutoScrollTimer();
}
