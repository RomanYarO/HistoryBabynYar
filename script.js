const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);	
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch')
} else {
	document.body.classList.add('_pc')
};
const scrollLinks = document.querySelectorAll('.header__link[data-to]');
if (scrollLinks.length > 0) {
    scrollLinks.forEach(scrollLinks => {
        scrollLinks.addEventListener('click', function(e){
            document.body.classList.remove('activeScroll');
			const menuIcon = document.querySelector('.header__icon');
			const menuCont = document.querySelector('.header__menu');
    		const header = document.querySelector('.header');
            menuIcon.classList.remove('active');
			menuCont.classList.remove('active');
        	header.classList.remove('active');
            const scrollLinks = e.target;
            const goTO = document.querySelector(scrollLinks.dataset.to);
            const goToVal = goTO.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                    top: goToVal,
                    behavior: 'smooth'
            });
        });
    });
}
function offset(el) {
	const rect = el.getBoundingClientRect(),
	scrollLeft = window.pagexOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
new Swiper ('.full-scrin__slider', {
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop: true,
    effect: 'slide',
    speed: 1000,
});


new Swiper ('.info-slider', {
    slidesPerView: 1,
	loop: true,
	spaceBetween: 15,
	centeredSlides: true,
	navigation: {
		nextEl: '.info-slider__next',
		prevEl: '.info-slider__prev',
	},
	effect: "coverflow",
				coverflowEffect: {
				rotate: 60,
				slideShadows: false,
				stretch: 10,
			},
	breakpoints: {
        800: {
            slidesPerView: 2,
        },
		1020: {
			slidesPerView: 3,
		}
    }
});
new Swiper ('.history__slider', {
	effect: "fade",
	autoHeight: false,
	thumbs: {
		swiper: {
			el: ".history__pagination",
			slidesPerView: 3,
		}
	},
	fadeEffect:{
		crossFade: true,
	}
});
new Swiper ('.history__pagination', {
	slidesPerView: 3,
	freeMode: true,
	watchSlidesVisibility: false,
	watchSlidesProgress: false,
	speed: 0,
	allowTouchMove: false,
	spaceBetween: 10,
});

const ends = document.querySelectorAll('a[href*="#"]');

for (let end of ends) {
    end.addEventListener("click",function(e) {
        e.preventDefault();
        const blockid = end.getAttribute('href')
        document.querySelector(''+ blockid).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
    
}
const menuIcon = document.querySelector('.header__icon');
if (menuIcon) {
	const menuCont = document.querySelector('.header__menu');
    const header = document.querySelector('.header');
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active');
		menuCont.classList.toggle('active');
        header.classList.toggle('active');
		document.body.classList.toggle('activeScroll');
	});
};
const mainInfoButton = document.querySelectorAll('.more-info');
mainInfoButton.forEach(item => {
		item.addEventListener('click', function(e){
		const mainArrow = document.querySelectorAll(".more-info__button-arrow");
		this.previousElementSibling.classList.toggle("_active");
		this.classList.toggle("_active");
	});
});
const monumentsImg = document.querySelectorAll('.monuments__img');
	monumentsImg.forEach(item => {
		item.addEventListener('click', function(e){
			this.classList.add('_active');
			document.body.classList.add('activeScroll');
			const backGround = document.querySelector(".monuments__arkasha");
			backGround.classList.add("_active");
			const cross = document.querySelector(".cross");
			cross.classList.add("_active")
		});
});
const backGround = document.querySelector(".monuments__arkasha");
	backGround.addEventListener("click", function(e) {
		const monumentsImg = document.querySelectorAll('.monuments__img');
		const backGround = document.querySelector(".monuments__arkasha");
		const cross = document.querySelector(".cross");
		backGround.classList.remove("_active");
		cross.classList.remove("_active");
		for (let i = 0; i < monumentsImg.length; i++) {
			monumentsImg[i].classList.remove("_active");
		}
		document.body.classList.remove("activeScroll");
});
const cross = document.querySelector(".cross");
	cross.addEventListener("click", function(e) {
		const monumentsImg = document.querySelectorAll('.monuments__img');
		const backGround = document.querySelector(".monuments__arkasha");
		const cross = document.querySelector(".cross");
		backGround.classList.remove("_active");
		cross.classList.remove("_active");
		for (let i = 0; i < monumentsImg.length; i++) {
			monumentsImg[i].classList.remove("_active");
		}
		document.body.classList.remove("activeScroll");
});
document.querySelector('.button-start').onclick=start;
document.querySelector('.button-stop').onclick=stop;

let video;
let display;
const buttonStart = document.querySelector('.button-start');
const buttonStop = document.querySelector('.button-stop');

video = document.querySelector('.video-player')
function start() {
	video.play();
	buttonStart.classList.add('_active');
	buttonStop.classList.remove('_active');
	buttonStart.classList.remove('_first')
}
function stop() {
	video.pause();
	buttonStart.classList.remove('_active');
	buttonStop.classList.add('_active');
}
const pagSlide = document.querySelectorAll('.history__pag-img');
	pagSlide.forEach(item => {
		item.addEventListener('click', function(e){
			const mainInfoButton = document.querySelectorAll('.more-info');
			for (let i = 0; i < mainInfoButton.length; i++) {
				mainInfoButton[i].previousElementSibling.classList.remove("_active");
			}
		});
	});