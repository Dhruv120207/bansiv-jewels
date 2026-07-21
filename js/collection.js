// FADE ANIMATION


const products = document.querySelectorAll(".product");


function revealProducts(){


products.forEach((product)=>{


let position =

product.getBoundingClientRect().top;


if(position < window.innerHeight-100){


product.style.opacity="1";


product.style.transform=

"translateY(0px)";


}


});


}



products.forEach((product)=>{


product.style.opacity="0";


product.style.transform=

"translateY(80px)";


product.style.transition=

"1s ease";


});



window.addEventListener(

"scroll",

revealProducts

);


revealProducts();