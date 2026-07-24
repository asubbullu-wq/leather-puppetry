// =====================================
// Sticky Header
// =====================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(10,10,10,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(15,17,21,0.85)";
        header.style.boxShadow = "none";
    }

});


// =====================================
// Hero Fade Animation
// =====================================

const hero = document.querySelector(".hero");

window.addEventListener("load", () => {

    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";

});


// =====================================
// Smooth Scroll
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =====================================
// Button Animation
// =====================================

const buttons = document.querySelectorAll("button,.btn1,.btn2");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// =====================================
// Scroll Reveal Animation
// =====================================

const reveals = document.querySelectorAll(".hero-text,.hero-image");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

});


// =====================================
// Initial Styles
// =====================================

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="1s";

});


// =====================================
// Search Icon
// =====================================

document.querySelector(".fa-search").onclick=()=>{

    alert("Search feature coming soon...");

};


// =====================================
// Wishlist
// =====================================

document.querySelector(".fa-heart").onclick=()=>{

    alert("Wishlist feature coming soon...");

};


// =====================================
// Cart
// =====================================

document.querySelector(".fa-shopping-cart").onclick=()=>{

    alert("Shopping Cart coming soon...");

};


// =====================================
// Login Button
// =====================================

document.querySelector("button").onclick=()=>{

    alert("Login page coming soon...");

};


// =====================================
// Console
// =====================================

console.log("Sri Durga Leather Puppets Website Loaded Successfully");