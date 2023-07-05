
let body = document.querySelector('body');

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

//typing text animation script
var typed = new Typed(".typing", {
    strings: ["A Full Stack Developer",  "A Java Backend Developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
})


document.querySelector('#resume-link-1').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1sNtc9piW1WoSwI0toZvcWi4_s6--903X/view?usp=share_link", "_blank");
})

document.querySelector('#resume-link-2').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1sNtc9piW1WoSwI0toZvcWi4_s6--903X/view?usp=share_link", "_blank");
})

const sr = ScrollReveal({
    origin: 'left',
    distance: '120px',
    duration: 2000,
    reset: true
})

sr.reveal('#about h1', { delay: 200})
sr.reveal('.home-img', { delay: 600 })
sr.reveal('#user-detail-intro', { delay: 600 })
sr.reveal('.skill', { delay: 200 })

sr.reveal('.project', {})
sr.reveal('.project-card img', { delay: 100 })
sr.reveal('.project-title', { delay: 200 })
sr.reveal('.project-description', { delay: 200 })
sr.reveal('.project-tech-stack', { delay: 200 })
sr.reveal('.repo-links', { delay: 200 })

sr.reveal('#github-streak-stats', { delay: 200 })
sr.reveal('#github-top-langs', { delay: 400 })
sr.reveal('#github-stats-card', { delay: 600 })

 sr.reveal('.calendar', { delay: 600 })

