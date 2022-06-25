// Background scrolling is slower than other elements,
// header scrolling is a little slower than other elements
// scrollTop returns the number of scroll the user do to an element vertically (in pixel)
// not scrolled = 0
// scroll down = scrollTop++
// scroll up = scrollTop--

const body = document.body;
const doc = document.documentElement; // return the document as an element. I think it returns the <html> element
const header = document.getElementById("header");
const footer = document.getElementById("footer");

window.addEventListener("scroll", function () {
    body.style.backgroundPosition = "0px " + ( 0 - ((doc.scrollTop) / 10) ) + "px";
    header.style.top = ((doc.scrollTop) / 1.5) + "px";
})

//


// Sound Effects

function cardHoverSound() {
    var sound = new Audio("sounds/card-hover.ogg");
    sound.play();
}
function otherClickSound() {
    var sound = new Audio("sounds/other-click.ogg");
    sound.play();
}
function sendMeTheFlowersSound() {
    var sound = new Audio("sounds/send-me-the-flowers.ogg");
    sound.play();
}
function pickSound() {
    const pickSound = ["pick-1.ogg", "pick-2.ogg"];
    var randomPickSound = pickSound[Math.floor(Math.random() * pickSound.length)];
    var sound = new Audio("sounds/" + randomPickSound);
    sound.play();
}
function backToTopSound() {
    var sound = new Audio("sounds/back-to-top.ogg");
    sound.play();
}

//


// This is to toggle the dark mode

const navbar = document.getElementById("navbar");
const cards = document.getElementsByClassName("card");
const bgColor = document.getElementsByClassName("bg-color");
const darkBtn = document.getElementById("dark");
const musicBtn = document.getElementById("music");
const searchIcon = document.getElementById("searchIcon");
const search = document.getElementById("search");
const idrIcon = document.getElementById("idrIcon");
const totalPrices = document.getElementById("totalPrices");
const img = document.getElementsByClassName("img");
const popup = document.getElementById("buyingForm");
const sendFlowers = document.getElementById("sendFlowersBtn");
const floats = document.getElementsByClassName("float");
const darkColors = ["#17223b", "#263859", "#556e53", "#84142d"];
const colors = ["#ffa45b", "#ffda77", "#fbf6f0", "#aee6e6"];

darkBtn.addEventListener("click", function() {
    otherClickSound();

    this.classList.toggle("clicked");
    
    if (this.classList.contains("clicked")) {
        document.getElementById("darkIcon").innerHTML = '<i class="fas fa-sun fa-stack-1x"></i>';
        this.title = "Light mode";

        for (var i = 0; i < flowers.length; i++) {
            // random dark cards color on each card
            var randomDarkColor = darkColors[Math.floor(Math.random() * darkColors.length)];
            cards[i].style.backgroundColor = randomDarkColor;
            //
        }
    } else {
        document.getElementById("darkIcon").innerHTML = '<i class="fas fa-moon fa-stack-1x"></i>';
        this.title = "Dark mode";

        for (var i = 0; i < flowers.length; i++) {
            // random cards color on each card
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            cards[i].style.backgroundColor = randomColor;
            //
        }
    }

    body.classList.toggle("dark-mode");

    for (const color of bgColor) {
        color.classList.toggle("dark-background");
    }

    for (const float of floats) {
        float.classList.toggle("dark-mode");
    }

    for (const image of img) {
        image.classList.toggle("img-dark");
    }
    
    // get each elements with class="card"
    for (const card of cards) {
        card.classList.toggle('dark-card');
    }
    // another way to do the iteration:
    // for (var i = 0; i < cards.length; i++) {
    //     cards[i].classList.toggle('dark-card');
    // }
    //

    searchIcon.classList.toggle("bg-dark");
    searchIcon.classList.toggle("text-light");
    
    idrIcon.classList.toggle("bg-dark");
    idrIcon.classList.toggle("text-light");
    totalPrices.classList.toggle("bg-dark");
    totalPrices.classList.toggle("text-light");
    
    popup.classList.toggle("dark-background");
    sendFlowers.classList.toggle("btn-dark");
    
    navbar.classList.toggle("navbar-light");
    navbar.classList.toggle("bg-light");
    navbar.classList.toggle("navbar-dark");
    navbar.classList.toggle("bg-dark");
});

//


// Background song

var music = new Audio("sounds/Tchaikovsky – Waltz of the Flowers.mp3");
music.loop = true;

musicBtn.addEventListener("click", function() {
    otherClickSound();
    
    this.classList.toggle("clicked");
    
    if (this.classList.contains("clicked")) {
        document.getElementById("slash").style.visibility = "hidden";
        this.title = "Pause music";

        music.play();
    } else {
        document.getElementById("slash").style.visibility = "visible";
        this.title = "Play music";

        music.pause();
    }
});

//


// This is to hide the navbar when scrolling down
// pageYOffset returns the number of scroll the user do to the window vertically (in pixel)
// not scrolled = 0
// scroll down = pageYOffset++
// scroll up = pageYOffset--

var scrollPosition1 = window.pageYOffset; // it results the same like using document.documentElement.scrollTop;

window.addEventListener("scroll", function() {
    const scrollPosition2 = window.pageYOffset;
    if (scrollPosition1 > scrollPosition2) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-250px";
    }
    scrollPosition1 = scrollPosition2;
});

//


// Get current year for the footer copyright

const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

//


// This is to show the "Back to Top" text for the back-to-top button

const backToTop = document.getElementById("backToTop");
const text = document.getElementById("topText");

backToTop.addEventListener("mouseover", function() {
    text.innerHTML = " Back to Top";
});
backToTop.addEventListener("mouseout", function() {
    text.innerHTML = "";
});
// click effect
backToTop.addEventListener("click", backToTopSound);
//
//


// The flowers data

// create flower class
class flower {
    constructor(img, name, scientific, family, price, stock) {
        this.image = img;
        this.name = name;
        this.scientificName = scientific;
        this.family = family;
        this.price = price;
        this.stock = stock;
    }
}
//

// create objects of flower
// Amaryllidaceae
var redSpiderLily = new flower ("images/red-spider-lily.png", "Red Spider Lily", "Lycoris radiata", "Amaryllidaceae", 150000, 100);
var poisonBulb = new flower ("images/poison-bulb.png", "Poison Bulb", "Crinum asiaticum", "Amaryllidaceae", 7000, 25);
var rainFlower = new flower ("images/rain-flower.png", "Rain Flower", "Pancratium zeylanicum", "Amaryllidaceae", 7500, 10);
// Rosaceae
var sweetBriarRose = new flower ("images/sweet-briar-rose.png", "Sweet Briar Rose", "Rosa rubiginosa", "Rosaceae", 45900, 38);
var narrowleafMeadowsweet = new flower ("images/narrowleaf-meadowsweet.png", "Narrowleaf Meadowsweet", "Spiraea alba", "Rosaceae", 203000, 150);
var chinesePhotinia = new flower ("images/chinese-photinia.png", "Chinese Photinia", "Photinia serratifolia", "Rosaceae", 140000, 98);
// Malvaceae
var chineseHibiscus = new flower ("images/chinese-hibiscus.png", "Chinese Hibiscus", "Hibiscus rosa-sinensis", "Malvaceae", 10000, 39);
var marshMallow = new flower ("images/marsh-mallow.png", "Marsh-mallow", "Althaea officinalis", "Malvaceae", 20400, 7);
var caesarweed = new flower ("images/Caesarweed.png", "Caesarweed", "Urena lobata", "Malvaceae", 35000, 3);
// God Tree
var shinju = new flower ("images/shinju.png", "God Tree (神樹, Shinju)", "-", "God Tree", 1500, 0);
//

// create array of flowers
var flowers = [];
for(var key in window) {
  var value = window[key];
  if (value instanceof flower) {
    flowers.push(value);
  }
}
//

//


// Fade effects

// Fade-out transition effect
// (opacity decreased by 10% (0.1) every 50 milliseconds)
function fadeOut(x, low, high) {
    const fadeOut = setInterval(function() {
        if (!x.style.opacity) {
            x.style.opacity = high;
        } else if (x.style.opacity > low) {
            x.style.opacity = parseFloat(x.style.opacity) - 0.1;
        } else {
            x.style.removeProperty("opacity");
            // completely stop the interval
            clearInterval(fadeOut);
            //
        }
    }, 50);
}
//

// Fade-in transition effect
// (opacity increased by 10% (0.1) every 50 milliseconds)
function fadeIn(x, low, high) {
    const fadeIn = setInterval(function() {
        if (!x.style.opacity) {
            x.style.opacity = low;
        } else if (x.style.opacity < high) {
            x.style.opacity = parseFloat(x.style.opacity) + 0.1;
        } else {
            x.style.removeProperty("opacity");
            // completely stop the interval
            clearInterval(fadeIn);
            //
        }
    }, 50);
}
//

//


// Change the header background randomly

const headerBg = document.getElementsByClassName("jum-background")[0];

var images = [];
for (var i = 0; i < flowers.length; i++) {
    images.push(flowers[i].image);
}

var randomImg = images[Math.floor(Math.random() * images.length)];
var headerImg = "url(" + randomImg + ")";
headerBg.style.backgroundImage = headerImg;

//flash effect as an image transition
setInterval(function() {
    fadeOut(headerBg, 0, 0.5);

    setTimeout(function() {
        headerBg.style.backgroundImage = headerImg;
        fadeIn(headerBg, 0, 0.5);
    }, 305);

    var randomImg = images[Math.floor(Math.random() * images.length)];
    
    var headerImg = "url(" + randomImg + ")";
}, 10000);
//


// Show the search result

const card = document.getElementsByClassName("each-card");

// use toUpperCase() to change the input and result to upper case,
// so it will be easier to find item without case sensitivity
search.addEventListener("keyup", function() {
    var name, sciName, family, nameRes;
    nameIn = this.value.toUpperCase();
    for (var i = 0; i < flowers.length; i++) {
        name = card[i].getElementsByClassName("name")[0];
        sciName = card[i].getElementsByClassName("scientific")[0];
        family = card[i].getElementsByClassName("family")[0];
        nameRes = name.innerText;
        sciNameRes = sciName.innerHTML;
        familyRes = family.innerHTML;
        // find flowers by name, scientific name, and family of flowers.
        if (nameRes.toUpperCase().indexOf(nameIn) >= 0 || sciNameRes.toUpperCase().indexOf(nameIn) >= 0 || familyRes.toUpperCase().indexOf(nameIn) >= 0) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
        //
    }
});
//

//


// This is to iterate the card

for (var i = 0; i < flowers.length-1; i++) {
    document.getElementById("cards").innerHTML += card[i].outerHTML;
}

//


// This is to fill the cards
const pick = document.querySelectorAll("#card button");
var pickNum = document.getElementsByClassName("pickNum");
const stock = document.getElementsByClassName("stock");

for (var i = 0; i < flowers.length; i++) {
    document.getElementsByClassName("img")[i].setAttribute("src", flowers[i].image);
    document.querySelectorAll("#card a")[i].setAttribute("href", flowers[i].image);
    document.getElementsByClassName("img")[i].setAttribute("title", flowers[i].name);
    document.getElementsByClassName("name")[i].innerHTML = flowers[i].name;
    document.getElementsByClassName("scientific")[i].innerHTML = "(" + flowers[i].scientificName + ")";
    document.getElementsByClassName("family")[i].innerHTML += flowers[i].family;
    document.getElementsByClassName("price")[i].innerHTML += flowers[i].price + " IDR";
    document.getElementsByClassName("stock")[i].innerHTML += flowers[i].stock;
    
    // if the stock is <= 3, make the font color red
    // change the number to stock + " flowers left"
    if (flowers[i].stock <= 3) {
        stock[i].style.color = "red";
        stock[i].innerHTML += " flowers left"
        stock[i].style.fontWeight = "bold";
    }
    //
    // if the stock runs out, add opacity, and disable "Pick" button and the quantity input,
    // change the stock to "SOLD OUT"
    if (flowers[i].stock === 0) {
        cards[i].style.opacity = 0.75;
        pick[i].disabled = true;
        pickNum[i].disabled = true;
        pick[i].style.background = "transparent";
        pickNum[i].style.background = "transparent";
        stock[i].innerHTML = "SOLD OUT"
        stock[i].style.fontWeight = "900";
    }
    //

    // random cards color
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    cards[i].style.backgroundColor = randomColor;
    //
}

//


// Reset picks

const buyFlowersForm = document.getElementById("buyFlowers");
const pickForm = document.getElementsByClassName("pick");
const reset = document.getElementById("resetBtn");

reset.addEventListener("click", function(){
    otherClickSound();

    this.classList.toggle("clicked");
    
    if (this.classList.contains("clicked")) {
        buyFlowersForm.reset();
        total = 0;

        for (var i = 0; i < flowers.length; i++) {
            pickNum[i].value = "";
            totalPrice[i].innerHTML = "0";
        }
    }
});

//


// Total Price

const totalPrice = document.getElementsByClassName("total-price");

totalPrices.disabled = true;

var total = 0;

var totalPriceValues = [];

// set the max value for each <input type="number"> in the card,
// and give a "click" event listener to each Pick button
for (var i = 0; i < flowers.length; i++){
    totalPriceValues[i] = 0;
    
    totalPrice[i].innerHTML = totalPriceValues[i];

    pickNum[i].setAttribute("max", flowers[i].stock);
    
    pickNum[i].setAttribute('index', i);
    pick[i].setAttribute('index', i);
    
    pickNum[i].addEventListener("input", function() {
        const i = this.getAttribute('index');

        if (pickNum[i].value > flowers[i].stock) {
            pickNum[i].value = flowers[i].stock;
        }
        totalPriceValues[i] = (flowers[i].price) * (pickNum[i].value);
        totalPrice[i].innerHTML = totalPriceValues[i];
    });    

    pick[i].addEventListener("click", function() {
        const i = this.getAttribute('index');
        
        total = 0;

        for (var j = 0; j < flowers.length; j++) {
            total += parseFloat(totalPrice[j].innerHTML);      
        }
        totalPrices.value = total;
        
        total = totalPrices.value;
        
        pickSound();
    });
}
// another way to do the function iteration with a function closure inside
// for (var i = 0; i < flowers.length; i++){
//     totalPriceValues[i] = 0;

//     totalPrice[i].innerHTML = (totalPriceValues[i]);

//     pickNum[i].setAttribute("max", flowers[i].stock);

//     (function(i) {
//         pickNum[i].addEventListener("input", function() {
//             if (pickNum[i].value > flowers[i].stock) {
//                 pickNum[i].value = flowers[i].stock;
//             }
//             totalPriceValues[i] = (flowers[i].price) * (pickNum[i].value);
//             totalPrice[i].innerHTML = (totalPriceValues[i]);
//         });

//         pick[i].addEventListener("click", function() {
//             total = 0;

//             totalPriceValues[i] = (flowers[i].price) * (pickNum[i].value);

//             for (var j = 0; j < flowers.length; j++) {
//                 total += totalPriceValues[j];      
//             }
//             totalPrices.value = total;
        
//             total = totalPrices.value;
            
//             pickSound();
//         });
//     }(i));
// }
//

//


// Buy Flowers 🌸:)

const buyFlowers = document.getElementById("buyFlowersBtn");
const close = document.getElementById("close");

buyFlowers.addEventListener("click", function(event) {
    // preventing from auto scroll-up when the button get clicked
    event.preventDefault();
    //

    otherClickSound();

    // fadeIn(popup);
    popup.classList.add("show");
});

close.addEventListener("click", function() {
    otherClickSound();

    // give fade-out effect right before remove class "show"
    fadeOut(popup, 0, 1);
    //
    // wait for 500 milliseconds (1 second) to remove class "show"
    setTimeout(function() {
        popup.classList.remove("show");
    }, 500);
    //
});

//


// The customers data

// create customer class
class customer {
    constructor(name, number, email, address, city, province, postal, total) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.address = address;
        this.city = city;
        this.province = province;
        this.postal = postal;
        this.total = total;
    }
}
//

// Send flowers
document.getElementById("sendForm").addEventListener('submit', function(event) {
    // preventing from auto refresh when the form is submitted
    event.preventDefault();
    //
    var name = document.forms["sendingForm"]["fName"].value;
    var number = document.forms["sendingForm"]["fNumber"].value;
    var email = document.forms["sendingForm"]["fEmail"].value;
    var address = document.forms["sendingForm"]["fAddress"].value;
    var city = document.forms["sendingForm"]["fCity"].value;
    var province = document.forms["sendingForm"]["fProvince"].value;
    var postal = document.forms["sendingForm"]["fPostal"].value;
    
    // create objects of customer
    var customer1 = new customer (name, number, email, address, city, province, postal, total);
    //
    
    console.log(customer1.name);
    console.log(customer1.number);
    console.log(customer1.email);
    console.log(customer1.address);
    console.log(customer1.city);
    console.log(customer1.province);
    console.log(customer1.postal);
    console.log(customer1.total + " IDR");

    // give fade-out effect right before remove class "show"
    fadeOut(popup, 0, 1);
    //
    // wait for 500 milliseconds (1 second) to remove class "show"
    setTimeout(function() {
        popup.classList.remove("show");
    }, 500);
    //

    // reset the total price in the top right corner
    buyFlowersForm.reset();
    //

    sendMeTheFlowersSound();
});
//

//


// Hover effect in cards

for (var i = 0; i < flowers.length; i++) {
    // if the stock runs out, add opacity, remove hover effects
    if (flowers[i].stock !== 0) {
        cards[i].setAttribute('index', i);

        cards[i].addEventListener("mouseover", function() {
            const i = this.getAttribute('index');

            img[i].classList.add('img-hover');
            this.classList.add('card-hover');
            
            img[i].classList.remove('img-back');
            this.classList.remove('card-back');

        });

        img[i].addEventListener("mouseover", cardHoverSound);

        cards[i].addEventListener("mouseout", function() {
            const i = this.getAttribute('index');
            
            img[i].classList.add('img-back');
            this.classList.add('card-back');

            img[i].classList.remove('img-hover');
            this.classList.remove('card-hover');
        });

    }
    //
}

//