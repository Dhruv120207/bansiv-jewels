const sections =

document.querySelectorAll(".story");


function revealStory() {


    sections.forEach((section) => {


        let position =

            section.getBoundingClientRect().top;


        if (position < window.innerHeight - 100) {


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

    revealStory

);


revealStory();