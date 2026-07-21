//=================================
// SECTION FADE ANIMATION
//=================================

const sections = document.querySelectorAll("section");


function revealSections() {

    sections.forEach((section) => {

        const position =
            section.getBoundingClientRect().top;


        if (position < window.innerHeight - 120) {

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0px)";

        }

    });

}


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(80px)";

    section.style.transition =
        "1s ease";

});


window.addEventListener(
    "scroll",
    revealSections
);


revealSections();





//=================================
// SMOOTH SCROLL
//=================================

document.querySelectorAll("a").forEach((link) => {


    link.addEventListener("click", function (e) {


        const target =
            this.getAttribute("href");


        // avoid errors
        if (
            target &&
            target.startsWith("#") &&
            target !== "#"
        ) {

            e.preventDefault();


            const section =
                document.querySelector(target);


            if (section) {

                section.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });


});






//=================================
// NAVBAR SHADOW EFFECT
//=================================


window.addEventListener("scroll", () => {


    const navbar =
        document.querySelector("nav");


    if (window.scrollY > 50) {


        navbar.style.boxShadow =

            "0 10px 35px rgba(0,0,0,.08)";


        navbar.style.background =

            "rgba(255,255,255,.9)";


    }


    else {


        navbar.style.boxShadow =

            "none";


        navbar.style.background =

            "rgba(255,255,255,.75)";


    }


});







//=================================
// BUTTON ANIMATION
//=================================


const buttons =
    document.querySelectorAll("button");


buttons.forEach((button) => {


    button.addEventListener("mouseover", () => {


        button.style.transition =
            ".5s";


        button.style.transform =
            "translateY(-6px)";


    });



    button.addEventListener("mouseout", () => {


        button.style.transform =
            "translateY(0px)";


    });


});








//=================================
// CARD HOVER EFFECT
//=================================


const cards =
    document.querySelectorAll(".card");


cards.forEach((card) => {


    card.addEventListener("mouseover", () => {


        card.style.transform =

            "translateY(-15px) scale(1.02)";


    });



    card.addEventListener("mouseout", () => {


        card.style.transform =

            "translateY(0px)";


    });


});








//=================================
// WHATSAPP FLOATING ANIMATION
//=================================


const whatsapp =

    document.querySelector(".whatsapp");


if (whatsapp) {


    setInterval(() => {


        whatsapp.style.transform =

            "translateY(-5px)";


        setTimeout(() => {


            whatsapp.style.transform =

                "translateY(0px)";


        }, 500);


    }, 3000);


}








//=================================
// HERO TEXT FADE EFFECT
//=================================


window.addEventListener("load", () => {


    const hero =

        document.querySelector(".hero-content");


    if (hero) {


        hero.style.opacity = "0";


        hero.style.transition =

            "2s ease";


        setTimeout(() => {


            hero.style.opacity = "1";


        }, 300);


    }


});








//=================================
// OPTIONAL : PRELOADER
// (FOR FUTURE USE)
//=================================


// const loader =
// document.querySelector(".loader");


// window.addEventListener("load",()=>{


// loader.style.display="none";


// });
