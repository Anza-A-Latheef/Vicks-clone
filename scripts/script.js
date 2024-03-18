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

    leftButtonNewin.addEventListener('click', function () {
        if (currentIndexNewin > 0) {
            currentIndexNewin--;
            sliderNewin.style.transform = `translateX(-${slideWidthNewin * currentIndexNewin}px)`;
        }
    });

    rightButtonNewin.addEventListener('click', function () {
        if (currentIndexNewin < maxIndexNewin) {
            currentIndexNewin++;
            sliderNewin.style.transform = `translateX(-${slideWidthNewin * currentIndexNewin}px)`;
        }
    });
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

    slider.style.width = `${slideWidth * visibleSlides}px`;

    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
    });

    rightButton.addEventListener('click', function () {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
            slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
    });
});

//  list slider popup
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(function (slide) {
        slide.addEventListener('click', function () {
            const title = slide.querySelector('h3').textContent;
            const imgSrc = slide.querySelector('img').getAttribute('src');
            const popup = document.getElementById('popup');
            const popupTitle = document.getElementById('popup-title');
            const popupImage = document.getElementById('popup-image');

            popupTitle.textContent = title;
            popupImage.setAttribute('src', imgSrc);
console.log(title,imgSrc);
            popup.style.display = 'flex';
        });
    });

    const closePopup = document.querySelector('.popup .close');
    closePopup.addEventListener('click', function () {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    });
});