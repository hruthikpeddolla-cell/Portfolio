
const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".nav-button");

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";
menuButton.classList.add("menu-button");

document.querySelector(".navbar").appendChild(menuButton);

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();



    if (name === "" || email === "" || message === "") {

        alert("Please fill in all required fields.");

        return;

    }


// Simple email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }



    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );


    contactForm.reset();

});


const currentYear =
    new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.textContent =
        "© " +
        currentYear +
        " SudiPeddolla Hruthik. All Rights Reserved.";

}


const projectLinks =
    document.querySelectorAll(".project-links a");


projectLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const linkValue =
            link.getAttribute("href");

        if (linkValue === "#") {

            event.preventDefault();

            alert(
                "Project link will be added soon."
            );

        }

    });

});


const header =
    document.querySelector("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 15px rgba(0, 0, 0, 0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0, 0, 0, 0.08)";

    }

});
