document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function nextSlide() {
        index = (index + 1) % totalSlides;
        document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
