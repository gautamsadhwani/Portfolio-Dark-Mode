let DayNight = document.querySelector(".Daynight");
let banner= document.querySelector(".banner")

DayNight.addEventListener("click", ()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings:["DropXOut", "Youtuber", "Singer", "Baker"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});