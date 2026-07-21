const cards =

document.querySelectorAll(".card");


function revealCards(){


cards.forEach((card)=>{


let position =

card.getBoundingClientRect().top;


if(position < window.innerHeight-100){


card.style.opacity="1";


card.style.transform=

"translateY(0px)";


}


});


}



cards.forEach((card)=>{


card.style.opacity="0";


card.style.transform=

"translateY(80px)";


card.style.transition=

"1s ease";


});



window.addEventListener(

"scroll",

revealCards

);


revealCards();