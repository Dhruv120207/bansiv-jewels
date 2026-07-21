const pieces =

document.querySelectorAll(".piece");


function revealPieces(){


pieces.forEach((piece)=>{


let position =

piece.getBoundingClientRect().top;


if(position < window.innerHeight-100){


piece.style.opacity="1";


piece.style.transform=

"translateY(0px)";


}


});


}



pieces.forEach((piece)=>{


piece.style.opacity="0";


piece.style.transform=

"translateY(80px)";


piece.style.transition=

"1s ease";


});



window.addEventListener(

"scroll",

revealPieces

);


revealPieces();