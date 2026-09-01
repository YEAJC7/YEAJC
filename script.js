const navLinks = document.querySelectorAll(".nav-link");

const pages = document.querySelectorAll(".page");

const pageButtons = document.querySelectorAll("[data-page]");


function changePage(pageName) {

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.page === pageName) {

            link.classList.add("active");

        }

    });


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


pageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

        if (page) {

            changePage(page);

        }

    });

});


/* RANDOM GLITCH EFFECT */

const title = document.querySelector(".glitch");


setInterval(() => {

    if (!title) return;

    title.style.transform =

        `translateX(${Math.random() * 4 - 2}px)`;


    setTimeout(() => {

        title.style.transform = "translateX(0)";

    }, 80);

}, 2500);