const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const links = document.querySelectorAll('a');
console.log(links);
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

const h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"];
const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

const topContent = document.querySelector('div.top-content');
const topH4 = topContent.querySelectorAll("div.text-content > h4");
const topP = topContent.querySelectorAll("div.text-content > p");
console.log(topContent);
topH4[0].textContent = siteContent["main-content"]["features-h4"];
topH4[1].textContent = siteContent["main-content"]["about-h4"];
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

const botContent = document.querySelector('div.bottom-content');
const botH4 = botContent.querySelectorAll("div.text-content > h4");
const botP = botContent.querySelectorAll("div.text-content > p");
console.log(botContent);
botH4[0].textContent = siteContent["main-content"]["services-h4"];
botH4[1].textContent = siteContent["main-content"]["product-h4"];
botH4[2].textContent = siteContent["main-content"]["vision-h4"];
botP[0].textContent = siteContent["main-content"]["services-content"];
botP[1].textContent = siteContent["main-content"]["product-content"];
botP[2].textContent = siteContent["main-content"]["vision-content"];

const contactSection = document.querySelector(".contact");
console.log(contactSection);
const contactH4 = contactSection.querySelector("h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
const contactP = contactSection.querySelectorAll("p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

const footerText = document.querySelector('footer > p');
console.log(footerText);
footerText.textContent = siteContent["footer"]["copyright"];