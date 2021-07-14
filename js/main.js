
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

if (document.querySelector('.rev')) {
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
}
if (document.querySelector('.hero__slide')) {
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
}
if (document.querySelector('.lessons')) {
	const lessonsSlider = new Swiper('.lessons__slider', {
		// If we need pagination

		breakpoints: {
			// when window width is >= 640px
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			}
		},
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar_lessons',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

if (document.querySelector('.leaders__slide')) {
	const leadersSlider = new Swiper('.leaders__slider', {
		// If we need pagination	
		// spaceBetween: 40,
		breakpoints: {
			// when window width is >= 640px
			768: {
				slidesPerView: 2,
				// spaceBetween: 60,
			},
			992: {
				slidesPerView: 3,
				// spaceBetween: 20,
			}
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar_leaders',
		},
	});
}


$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});

if (document.querySelector('.training-second__selector')) {
	$('.training-second__selector').niceSelect();
	/*document.querySelectorAll('.training-second__selector').forEach(function(selector){
		
	});*/
}
});