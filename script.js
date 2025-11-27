let image = document.querySelectorAll(".vbgrid img");
let image_show = document.querySelectorAll("#products");
let plus = document.getElementById("innimg2");
let minus = document.getElementById("innimg1");
let numb = document.getElementById("num");
let cart_open = document.querySelector("#open-cart");
let cart = document.querySelector(".cart-div");
let cart_update = document.querySelector("small");
let carts = document.querySelector(".carts");
let omo = document.querySelector("#omo");
let pp = document.querySelector(".carts p");
let but = document.querySelector(".carts button");
let inn = document.querySelector(".gr-inner");
let men = document.querySelector("aside");
let line = document.querySelectorAll(".line");
let li = document.querySelectorAll(".topnav ul li");
let li2 = document.querySelectorAll("aside ul li");
let liner = document.querySelectorAll(".liner")

// let close = document.querySelector("aside img");




function menu() {
    men.style.display = "block";
    cart.classList.remove("open");
}

function clos() {
    men.style.display = "none";
}

let current = 0;
function show(index) {
    let len = image_show.length;
    if (len === 0) return;
    current = ((index % len) + len) % len;
    for (let i = 0; i < len; i++) {
        image_show[i].style.display = i === current ? "block" : "none";
        if (image[i]) {
            if (i === current) {
                image[i].classList.add("imagehov");
                image[0].classList.remove("active");
            } else {
                image[i].classList.remove("imagehov");
            }
        }
    }
}

for (let a = 0; a < image.length; a++) {
    (function (id) {
        image[id].addEventListener("click", () => {
            show(id);
        });
    })(a);
}

// prev next controls
let prev = document.querySelector(".prev.cont");
let next = document.querySelector(".next.cont");
if (prev) prev.addEventListener("click", () => show(current - 1));
if (next) next.addEventListener("click", () => show(current + 1));


let updateNum = 0;
let cartUpdate = 0;
plus.addEventListener("click", () => {
    // updateNum + 1;
    updateNum++;
    cartUpdate++
    numb.textContent = `${updateNum}`;
    inn.classList.remove("ion");
    // cart_update.textContent = `${cartUpdate}`;
})

minus.addEventListener("click", () => {
    // updateNum - 1;
    updateNum--;
    cartUpdate--;
    numb.innerHTML = `${updateNum}`;
    // cart_update.textContent = `${cartUpdate}`;
})

let b = 0;

function addTocart() {
    let total = 125.00 * updateNum;
    // cartUpdate++

    carts.classList.add("klm");
    if (carts.classList.contains("klm") && updateNum != 0 && updateNum > 0) {
        b++;

        but.style.display = "block";
        cart_update.style.display = "block";
        cart_update.innerHTML = `${b}`
        pp.style.display = "none"
        omo.innerHTML += `
            <div class="inside-cart">
                    <span class="insc1">
                        <img src="ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1.jpg"
                            alt="">
                    </span>
    
                    <div style="display: block;" class="spanpar">
                        <span class="fspan">Fall Limited Edition Sneakers</span> <br>
                        <span class="sspan">$125.00 x ${updateNum} <span class="tot">$ ${total}.00</span></span>
                    </div>
    
                    <span class="cart-del">
                        <img src="ecommerce-product-page-main/ecommerce-product-page-main/images/icon-delete.svg" alt="" class="deletee">
                    </span>
            </div>
        `


        let dele = document.querySelectorAll(".deletee");
        for (let i = 0; i < dele.length; i++) {
            dele[i].addEventListener("click", (e) => {
                e.target.parentElement.parentElement.remove();
                b--;
                cart_update.innerHTML = `${b}`;
                if (b === 0) {
                    cart_update.style.display = "none";
                    pp.style.display = "block";
                    but.style.display = "none";
                }

            })
        }
    }

    else if (updateNum <= 0) {
        // alert("Please Update the Carts Number!!!")
        inn.classList.add("ion")
    }

}



image[0].addEventListener("click", () => {
    image_show[0].style.display = "block";
    image_show[1].style.display = "none";
    image_show[2].style.display = "none";
    image_show[3].style.display = "none";
    image[1].classList.remove("imagehov");
    image[2].classList.remove("imagehov");
    image[3].classList.remove("imagehov");
})

image[1].addEventListener("click", () => {
    image_show[1].style.display = "block";
    image_show[0].style.display = "none";
    image_show[2].style.display = "none";
    image_show[3].style.display = "none";
    image[0].classList.remove("imagehov");
    image[2].classList.remove("imagehov");
    image[3].classList.remove("imagehov");
})

image[2].addEventListener("click", () => {
    image_show[2].style.display = "block";
    image_show[0].style.display = "none";
    image_show[1].style.display = "none";
    image_show[3].style.display = "none";
    image[0].classList.remove("imagehov");
    image[1].classList.remove("imagehov");
    image[3].classList.remove("imagehov");
})

image[3].addEventListener("click", () => {
    image_show[3].style.display = "block";
    image_show[0].style.display = "none";
    image_show[1].style.display = "none";
    image_show[2].style.display = "none";
    image[0].classList.remove("imagehov");
    image[1].classList.remove("imagehov");
    image[2].classList.remove("imagehov");
})

cart_open.addEventListener("click", () => {
    cart.classList.toggle("open");
    cart.classList.add("cart-anim");
    men.style.display = "none";
})





for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseover", () => {
        line[i].style.display = "block"
    })

    li[i].addEventListener("mouseleave", () => {
        line[i].style.display = "none";
        // line[i].style.animation = "linee 0.4s"
    })
}

for (let i = 0; i < li2.length; i++) {
    li2[i].addEventListener("mouseover", () => {
        liner[i].style.display = "block"
    })

    li2[i].addEventListener("mouseleave", () => {
        liner[i].style.display = "none";
    })
}