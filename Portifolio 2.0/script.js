function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showTimeline() {
    var professionalTimeline = document.getElementById("professional-timeline");
    var extracurricularTimeline = document.getElementById("extracurricular-timeline");

    var isProfessionalSelected = document.getElementById("professional").checked;
    var isExtracurricularSelected = document.getElementById("extracurricular").checked;

    if (isProfessionalSelected) {
        professionalTimeline.style.display = "block";
        extracurricularTimeline.style.display = "none";
    } else if (isExtracurricularSelected) {
        extracurricularTimeline.style.display = "block";
        professionalTimeline.style.display = "none";
    }
}


