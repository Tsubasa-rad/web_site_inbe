const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const zishinTime = new Date('April 16 2016 01:25:00');



menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
 function toggleMenu(){
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
 }


 gsap.to("#bg", {
    scrollTrigger : {
        scrub : 1
    },
    scale : 1.5
});
gsap.to("#man", {
    scrollTrigger : {
        scrub : 1
    },
    scale : 0.5
});
gsap.to("#mountain_left", {
    scrollTrigger : {
        scrub : 1
    },
    x : -500,
});
gsap.to("#mountain_right", {
    scrollTrigger : {
        scrub : 1
    },
    x : 500,
});
gsap.to("#text", {
    scrollTrigger : {
        scrub : 1
    },
    y : 500,
});



function updateCount() {
    const currentTime = new Date();
    const diff = currentTime - zishinTime;

    const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    const d = Math.floor(diff / 1000 / 60 / 60 / 24) % 365;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    year.innerHTML = y;
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCount, 1000);




var ImgBox = document.querySelector(".img-box");
        var imgWrap = document.querySelector(".img-wrap");
        var originalImg = document.getElementById("originalImg");
        var line = document.getElementById("line");

        originalImg.style.width = ImgBox.offsetWidth + "px";

        var leftSpace = ImgBox.offsetLeft;

        ImgBox.onmousemove = function(e) {
            var boxWidth = (e.pageX -leftSpace) + "px";
            imgWrap.style.width = boxWidth;
            line.style.left = boxWidth;
        }