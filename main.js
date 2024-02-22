var typed= new Typed ('#text1',{
    strings:[" I'M a student "," FY BSC IT "," From University of Mumbai "],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// preloder 
const fadeOut= () => {
    const loader = document.querySelector(".preloader");
    loader.classList.remove("preloader")
}
window.addEventListener("load",fadeOut);