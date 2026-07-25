let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image){

const product={
name,
price,
image,
qty:1
};

const existing=cart.find(item=>item.name===name);

if(existing){

existing.qty++;

}else{

cart.push(product);

}

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert(name+" added to cart");

}

function updateCart(){

const count=document.getElementById("cartCount");

if(!count) return;

count.innerHTML=cart.reduce((a,b)=>a+b.qty,0);

}

updateCart();

let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

function addWishlist(name){

wishlist.push(name);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert("Added to Wishlist ❤️");

}

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const title=card.innerText.toLowerCase();

card.style.display=title.includes(value)?"block":"none";

});

});