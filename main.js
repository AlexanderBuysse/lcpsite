import './reset.css'
import './style.scss'
import Logo from './assets/img/logo-lcp.svg';
import Stripes from './assets/img/menu-stripes.svg';
import Cultuurhuis from './assets/img/cultuurhuis-tessenderlo.png';
import LogoTessenderlo from './assets/img/logo-tessenderlo.svg';
import Logos1 from './assets/img/logos1.png';
import Logos2 from './assets/img/logos2.png';
import Oostende from './assets/img/oostende.png';
import OostendeSvg from './assets/img/oostende.svg';
import Oudenburg from './assets/img/oudenburg.png';
import Temse from './assets/img/temse.png';
import Theatre from './assets/img/theatre.png';
//import MagnetMouse from 'magnet-mouse';
import gsap from "gsap";

import MouseFollower from "mouse-follower";

import simpleParallax from 'simple-parallax-js';

import { Application } from '@splinetool/runtime';


MouseFollower.registerGSAP(gsap);

//<canvas id="canvas3d"></canvas>


//van alles testen
document.querySelector('#app').innerHTML = `
<main class="home__container">
		<nav class="home__nav">
		<img class="logo" src="${Logo}" alt="logo lcp">
			<div class="nav__items">
				<p class="nav__item magnet"><span class="btn-txt">Cases</span></p>
				<p class="nav__item magnet"><span class="btn-txt">Oplossingen</span></p>
				<p class="nav__item magnet"><span class="btn-txt">Aanpak</span></p>
			</div>
			<div class="nav__menu magnet">
				<p class="nav__item">Menu</p>
				<img class="nav__img" src="${Stripes}" alt="">
			</div>
		</nav>
		<article class="home__article">
			<h1 class="home__title"><span class="slide-up">Wij helpen bouwen aan jouw </span><span class="delay-1 slide-up">Creative & performante website </span><span class="delay-2 slide-up">vol van de expertise.</span></h1>
		</article>

		<article class="article-first">
			<div class="case-container scroll-article">
				<img src="${Oudenburg}" width="955" height="955" class="case-img-new"/>
				<h2 class=""><span class="slide-up">Stad Oudenburg</span></h2>
				<p>Wat een stad is Oudenburg toch</p>
			</div>

			<div class="case-container">
				<div class="tessenderlo-para">
					<img src="${LogoTessenderlo}" class="logo-tes"/>
					<img src="${Theatre}" width="552" height="522" class="case-img case-2"/>
				</div>
				<h2 class=""><span class="slide-up">Cultuurhuis Tessenderlo</span></h2>
				<p>Cultuur voor iedereen</p>
			</div>
		</article>

		<article class="article-first margintop">
			<div class="case-container">
				<div class="tessenderlo-para">
					<img src="${OostendeSvg}" class="logo-tes"/>
					<img src="${Oostende}" width="552" height="522" class="case-img case-2"/>
				</div>
				<h2 class=""><span class="slide-up">Stad Oostende</span></h2>
				<p>Cultuur voor iedereen</p>
			</div>

			<div class="case-container second-art">
				<img src="${Temse}" width="955" height="955" class="case-img-new"/>
				<h2 class=""><span class="slide-up">Gemeente Temse</span></h2>
				<p>De gemeente Temse is bere toch</p>
			</div>
		</article>

		<div class="logos-container">
			<img src="${Logos1}" class="logo1"/>
			<img src="${Logos2}" class="logo2"/>
		</div>

	</main>
`

//clean versie
// document.querySelector('#app').innerHTML = `
// <main class="home__container">
// 		<nav class="home__nav">
// 			<img class="logo" src="${Logo}" alt="logo lcp">
// 			<div class="nav__items">
// 				<p class="nav__item magnet"><span class="btn-txt">Cases</span></p>
// 				<p class="nav__item magnet"><span class="btn-txt">Oplossingen</span></p>
// 				<p class="nav__item magnet"><span class="btn-txt">Aanpak</span></p>
// 			</div>
// 			<div class="nav__menu magnet">
// 				<p class="nav__item">Menu</p>
// 				<img class="nav__img" src="${Stripes}" alt="">
// 			</div>
// 		</nav>
// 		<article class="home__article">
// 			<h1 class="home__title slide-up">Wij helpen bouwen aan jouw Creative & performante website vol van de expertise.</h1>
// 		</article>
// 		<article class="article-second">
// 			<div class="case-first">
// 			</div>
// 			<div class="case-second">
// 			</div>
// 		</article>
// 	</main>
// `

// let mm = new MagnetMouse({
// 	magnet: {
// 		element: '.magnet',
// 		distance: 0,
// 	},
// 	follow: {
// 		element: '.follow'
// 	},
// 	inCallback: function (data) {
// 		console.log(data);
// 	}
// });


// const init =()=> {
// 	console.log('test test');
// 	//mm.init();
// }

// init();

const cursor = new MouseFollower();

const magneticButtons = [];

class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        // this.attachEventsListener();
    }

    // attachEventsListener() {
    //     window.addEventListener('mousemove', e => this.onMouseMove(e));
    //     window.addEventListener('resize', e => this.calculatePosition());
    // }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });

        const box = this.el.getBoundingClientRect();
		console.log(box);
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
    }

  
  // berekent of de muis in de erea komt van de aangegeven cordinaten
    onMouseMove(e) {
		console.log('de muis heeft bewogen');
		//console.log(e);
		let hover = false;
		let hoverArea = this.hover ? .8 : .5;
		let x = e.clientX - this.x;
		let y = e.clientY - this.y;
		let distance = Math.sqrt(x * x + y * y);
		if (distance < this.width * hoverArea | distance < this.height * hoverArea) {
			hover = true;
			if (!this.hover) {
				this.hover = true;
			}
			this.onHover(e.clientX, e.clientY);
		}

		if (!hover && this.hover) {
			this.onLeave();
			this.hover = false;
		} 
    }

    onHover(x, y) {
		//console.log('er wordt gehoverd');

        gsap.to(this.el, {
            x: (x - this.x) * 0.2,
            y: (y - this.y) * 0.2,
            scale: 1,
            ease: 'power3.out',
            duration: 0.4
        });

        this.el.style.zIndex = 10;
    }
  
    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            ease: 'elastic.out(1.1, .4)',
            duration: 1.2
        });

		console.log('de button wordt verlaten')

        this.el.style.zIndex = 1;
    }
}

const handleEnterMouse = () => {
	//console.log('test test mouse in');
	cursor.setText('Back to home');
}

const handleLeaveMouse = () => {
	cursor.removeText();
}

const handleEnterMouseLink = () => {
	//console.log('test test mouse in');
	//cursor.setText('Back to home');
	cursor.hide();
}

const handleLeaveMouseLink = () => {
	cursor.removeText();
	cursor.show();
}

// Hover effect end 
const init = () => {

	// seletor here
	const btn1 = document.querySelector('.magnet:nth-child(1)');
	const magneticBtn1 = new HoverButton(btn1);
	
	const btn2 = document.querySelector('.magnet:nth-child(2)');
	const magneticBtn2 = new HoverButton(btn2);
	
	const btn3 = document.querySelector('.magnet:nth-child(3)');
	const magneticBtn3 = new HoverButton(btn3);
	
	const btn4 = document.querySelector('.nav__menu');
	const magneticBtn4 = new HoverButton(btn4);
	
	const btn5 = document.querySelector('.logo');
	const magneticBtn5 = new HoverButton(btn5);

	magneticButtons.push(magneticBtn1, magneticBtn2, magneticBtn3, magneticBtn4, magneticBtn5);

	window.addEventListener('mousemove', e => {
		magneticButtons.forEach(magnetic => {
			//console.log('dit word getriggerd');
			magnetic.onMouseMove(e);
		})
	});

	window.addEventListener('rezise', e => {
		magneticButtons.forEach(magnetic => {
			magnetic.calculatePosition();
		})
	});

	document.querySelector('body').addEventListener('mouseenter', () => {
		//cursor.setSkewing(1.5);
	});

	const logo = document.querySelector('.logo');
	console.log(logo)

	logo.addEventListener("mouseenter", handleEnterMouse);

	logo.addEventListener('mouseleave', handleLeaveMouse);

	const homeNavs = document.querySelectorAll('.nav__item');
	homeNavs.forEach(homeNav => {
		homeNav.addEventListener("mouseenter", handleEnterMouseLink);
	
		homeNav.addEventListener('mouseleave', handleLeaveMouseLink);
	})

	const box = document.querySelector('.follow');
	const el = document.querySelector('.place');

	// box.addEventListener('mouseenter', () => {
	// 	cursor.setStick(el);
	// 	cursor.removeSkewing();
	// });

	// box.addEventListener('mouseleave', () => {
	// 	cursor.removeStick();
	// 	cursor.setSkewing(1.5);
	// })

	const titles = document.querySelectorAll('.case-container');

	titles.forEach(title => {
		title.addEventListener('mouseenter', () => {
			//cursor.setImg('./assets/img/hertje.jpg')
			cursor.setText('Bekijk case');
		});
	
		title.addEventListener('mouseleave', () => {
			//cursor.removeImg()
			cursor.removeText();
		});
	})


	var images = document.querySelectorAll('.case-img');
	images.forEach(image => {
		new simpleParallax(image, {
			delay: .3,
			transition: 'cubic-bezier(0,0,0,1)',
			scale: 1.4,
			overflow: false,
			orientation: "down"
		});
	})

	var images = document.querySelectorAll('.case-img-new');
	images.forEach(image => {
		new simpleParallax(image, {
			delay: .5,
			transition: 'cubic-bezier(0,0,0,1)',
			scale: 1.1,
			overflow: false,
			orientation: "down"
		});
	})

	// var images = document.querySelector('.case-img');
	// new simpleParallax(images, {
	// 	delay: .1,
	// 	transition: 'cubic-bezier(0,0,0,1)',
	// 	scale: 1
	// });

	// var images = document.querySelector('.uiltje');
	// new simpleParallax(images, {
	// 	delay: .1,
	// 	transition: 'cubic-bezier(0,0,0,2)'
	// });

	var images = document.querySelector('.logo1');
	new simpleParallax(images, {
		overflow: true,
		orientation: 'right',
		scale: 4
	});

	var images = document.querySelector('.logo2');
	new simpleParallax(images, {
		overflow: true,
		orientation: 'left',
		scale: 4
	});

	var testssss = document.querySelector('.scroll-article');
	new simpleParallax(testssss, {
		overflow: true,
		orientation: 'up',
		scale: 1.1,
		customContainer: document.querySelector('.article-first')
	});

	const secondArticle = document.querySelector('.second-art');
	new simpleParallax(secondArticle, {
		overflow: true,
		orientation: 'up',
		scale: 1.1,
		customContainer: document.querySelector('.article-first')
	});

	// var images = document.querySelector('.logos-container');
	// new simpleParallax(images, {
	// 	overflow: true,
	// 	orientation: 'left',
	// 	scale: 4
	// });


		// const canvas = document.getElementById('canvas3d');
		// const app = new Application(canvas);
		// app.load('https://prod.spline.design/mOIxuA9kNvbDIXS7/scene.splinecode');
	}

init();
