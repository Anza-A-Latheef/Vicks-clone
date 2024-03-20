// newin secion list

const newProducts = [
    { title: "IMMUNITY Zzzzs", subtitle: "Immune Support", buttonText: "shop", bgClass: "bg-one" },
    { title: "DAYQUIL & NYQUIL", subtitle: "Cold & Flu", buttonText: "shop", bgClass: "bg-two" },
    { title: "SINEX", subtitle: "Sinus", buttonText: "shop", bgClass: "bg-three" },
    { title: "SINEX", subtitle: "Sinus", buttonText: "shop", bgClass: "bg-four" },
    { title: "SINEX", subtitle: "Sinus", buttonText: "shop", bgClass: "bg-five" },
    { title: "SINEX", subtitle: "Sinus", buttonText: "shop", bgClass: "bg-six" }
];
function generateNewProductCards() {
    const sliderNewIn = document.getElementById("slider-newin");

    newProducts.forEach(product => {
        const li = document.createElement("li");
        li.className = product.bgClass + (product.bgClass === "bg-one" ? " active" : "");
        li.title = product.title;
        const a = document.createElement("a");
        a.href = "#";

        const divContainer = document.createElement("div");
        divContainer.className = "container";

        const h3 = document.createElement("h3");
        h3.innerHTML = `${product.title}<br/><span class="upper">${product.subtitle}</span>`;

        const h6 = document.createElement("h6");
        h6.textContent = product.subtitle;

        const button = document.createElement("button");
        button.textContent = product.buttonText;

        divContainer.appendChild(h3);
        divContainer.appendChild(h6);
        divContainer.appendChild(button);

        a.appendChild(divContainer);

        const divHoverElement = document.createElement("div");
        divHoverElement.className = "hover-element";

        const divHoverContainer = document.createElement("div");
        divHoverContainer.className = "hover-container";

        const icons = ['fa-search-plus', 'fa-clone', 'fa-ellipsis-h'];
        icons.forEach(icon => {
            const button = document.createElement("button");
            button.innerHTML = `<i class="fa ${icon}" title="Visual search"></i>`;
            divHoverContainer.appendChild(button);
        });

        divHoverElement.appendChild(divHoverContainer);
        a.appendChild(divHoverElement);

        li.appendChild(a);
        sliderNewIn.appendChild(li);
    });
}
generateNewProductCards();

// find vicks section list 
const products = [
    { name: "NyQuil", image: "../images/11_YourVicks-1.avif" },
    { name: "DayQuil", image: "../images/12_YourVicks-2.avif" },
    { name: "VicksVapo", image: "../images/13_YourVicks-3.avif" },
    { name: "Sinex", image: "../images/14_YourVicks-4.avif" },
    { name: "VapoCool", image: "../images/15_YourVicks-5.avif" },
    { name: "Vicks", image: "../images/16_YourVicks-6_Desk.avif" },
    { name: "FluTherapy", image: "../images/17_YourVicks-7.avif" }
];
function generateProductCards() {
    const slider = document.getElementById("slider");

    products.forEach((product) => {
        const li = document.createElement("li");
        li.title = product.name;
        li.className = "slide";
        li.onclick = () => popupDiv(li);

        const button = document.createElement("button");
        button.className = "cardbutton";

        const divImg = document.createElement("div");
        divImg.className = "card-img";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const divCont = document.createElement("div");
        divCont.className = "cardcont";

        const h3 = document.createElement("h3");
        h3.textContent = product.name;

        divImg.appendChild(img);
        divCont.appendChild(h3);
        button.appendChild(divImg);
        button.appendChild(divCont);
        li.appendChild(button);
        slider.appendChild(li);
    });
}
generateProductCards();

 //style changes on scroll
 window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var navLink = document.querySelectorAll('#home #main header .header-cont .wrapper nav .left ul li a');
    var searchIcon = document.querySelector('#home #main header .header-cont .wrapper nav .right button i');
    var searchicon=document.querySelector('#home #main header .header-responsive .wrapper .right button i');
    var hamsberg=document.querySelector('#home #main header .header-responsive .wrapper .bar-icon button i');

    if (window.scrollY > 0) {
        header.classList.add('scroll-background-white');
        searchIcon.style.color = "#09357a";
        searchicon.style.color="#09357a";
        hamsberg.style.color="#09357a";
        navLink.forEach(function(element) {
            element.classList.remove('navheads');
            element.classList.add('navhover');
            element.addEventListener('mouseenter', function() {
                searchIcon.style.color = "#09357a"; 
            });
            element.addEventListener('mouseleave', function() {
                searchIcon.style.color = "#ffffff"; 
            });
        });
    } else {
        header.classList.remove('scroll-background-white');
        searchIcon.style.color = "#ffffff"; 
        searchicon.style.color="#ffffff";
        hamsberg.style.color="#ffffff";
        navLink.forEach(function(element) {
            element.classList.add('navheads');
            element.classList.remove('navhover');
            element.removeEventListener('mouseenter', function() {
                searchIcon.style.color = "#09357a"; 
            });
            element.removeEventListener('mouseleave', function() {
                searchIcon.style.color = "#ffffff"; 
            });
        });
    }
});

//toggle footer on responsive point 980 
document.addEventListener('DOMContentLoaded', function() {
const itemheads = document.querySelectorAll('.itemhead');
    itemheads.forEach(itemhead => {
        itemhead.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });
});

//open menu on responsive
document.addEventListener('DOMContentLoaded', function() {
    const openmenu = document.getElementById('open-menu');
    const content = document.getElementById('responsive-menu');
    const closeBtn = document.getElementById('close-menu');

    openmenu.addEventListener('click', function() {
        content.style.display = "flex";
    });
    
    closeBtn.addEventListener("click", function() {
        content.style.display = "none";
    });
});
//scroll down event
    document.addEventListener("DOMContentLoaded", function() {
        var scrollButton = document.querySelector('.scroll-down');
        scrollButton.addEventListener('click', function() {
            var nextSection = document.getElementById("newin");
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

// newin section scroll
document.addEventListener('DOMContentLoaded', function () {
    const sliderNewin = document.getElementById('slider-newin');
    const leftButtonNewin = document.getElementById('left-scroll');
    const rightButtonNewin = document.getElementById('right-scroll');
    const slidesNewin = Array.from(sliderNewin.children);
    const slideWidthNewin = slidesNewin[0].offsetWidth;
    const visibleSlidesNewin = 3;
    let currentIndexNewin = 0;
    let maxIndexNewin = slidesNewin.length - visibleSlidesNewin;

    sliderNewin.style.width = `${slideWidthNewin * slidesNewin.length}px`;

    function buttonDisplay() {
        leftButtonNewin.style.display = currentIndexNewin > 0 ? "flex" : "none";
        rightButtonNewin.style.display = currentIndexNewin < slidesNewin.length - visibleSlidesNewin ? "flex" : "none";
    }

    leftButtonNewin.addEventListener('click', function () {
        if (currentIndexNewin > 0) {
            currentIndexNewin--;
            sliderNewin.scrollLeft-=(slideWidthNewin + 40)
            buttonDisplay();
        }
    });
    
    rightButtonNewin.addEventListener('click', function () {
        if (currentIndexNewin < maxIndexNewin) {
            currentIndexNewin++;
            sliderNewin.scrollLeft+=(slideWidthNewin + 40)
            buttonDisplay();
        }
    });
    buttonDisplay();
});


// find vicks section scroll
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const slides = Array.from(slider.children);
    const slideWidth = slides[0].offsetWidth;
    const visibleSlides = 4;
    let currentIndex = 0;
    let maxIndex = slides.length - visibleSlides;

    slider.style.width = `${slideWidth * slides.length}px`;

    function updateButtonDisplay() {
        leftButton.style.display = currentIndex > 0 ? "flex" : "none";
        rightButton.style.display = currentIndex < slides.length - visibleSlides ? "flex" : "none";
    }

    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            slider.scrollLeft-= (slideWidth + 40)
            updateButtonDisplay();
        }
    });

    rightButton.addEventListener('click', function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            slider.scrollLeft+=(slideWidth + 40)
            updateButtonDisplay();
        }
    });
    updateButtonDisplay();
});

//  list slider popup

function popupDiv(element){
    const title = element.querySelector('h3').textContent;
    const imgSrc = element.querySelector('img').getAttribute('src');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
        popupTitle.textContent = title;
        popupImage.setAttribute('src', imgSrc);
        popup.style.display='flex';
        document.body.style.overflow = 'hidden'; 
}
document.addEventListener('DOMContentLoaded', function (){
    const closePopup = document.querySelector('.popup .close');
    const popup = document.getElementById('popup');
    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
    popup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

// filter search option
function filterProducts(){
    var input,filter,ul, li,h3,i,txtValue;
    input=document.getElementById('searchInput');
    filter=input.value.toUpperCase();
    ul=document.getElementById("slider");
    li=ul.getElementsByTagName('li');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    for(i=0;i<li.length;i++){
        h3=li[i].getElementsByTagName("h3")[0];
        txtValue=h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter)> -1){
            li[i].style.display="";
            leftButton.style.display="none";
            rightButton.style.display="none";
        }else{
            li[i].style.display="none";
        }
    }
    if(input.value.length<= 0){
        leftButton.style.display="flex";
        rightButton.style.display="flex";
    }
}
