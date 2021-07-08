
window.addEventListener('DOMContentLoaded', () => {
let iconMenu = document.querySelector(".menu-header__icon");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

const reviewsSlider = new Swiper('.reviews__slider', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const heroSlider = new Swiper('.hero__slider', {
	// If we need pagination
	pagination: {
		el: '.hero-swiper-pagination',
		type: 'fraction',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar-hero',
	},
});


function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

});