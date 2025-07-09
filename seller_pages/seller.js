const quotes = document.getElementById("quotes")
let i =0;
const welcomecards_s = [
    "MANAGE",
    "TRACK",
    "GROW"
]
const welcomecards_e = [
    " Your Products",
    " Orders",
    " Your Business"
]
function welcomechange(){
    quotes.children[0].textContent = welcomecards_s[i];
    quotes.children[1].textContent = welcomecards_e[i];
    i=(i+1)%welcomecards_s.length;
}
welcomechange();
setInterval(welcomechange,2000);

// --------------------------------------------------------
const maincontents = document.getElementById("contents")
const profilebox = document.getElementById("profilebar")

function profilebar(){
    profilebox.style.display = "flex"
    maincontents.classList.add("blurred")
    document.body.classList.add("noscroll")
}

function closeProfilebar(){
    profilebox.style.display = "none"
    maincontents.classList.remove("blurred")
    document.body.classList.remove("noscroll")
}