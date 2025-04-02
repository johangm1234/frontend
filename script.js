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

document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let request = document.getElementById("request").value;
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || request === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        event.preventDefault(); 
    }
});
