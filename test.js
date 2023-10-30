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


MouseFollower.registerGSAP(gsap);

//<canvas id="canvas3d"></canvas>


//van alles testen
document.querySelector('#app').innerHTML = `
<main class="home__container">
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

// Hover effect end 
const init = () => {

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
}

init();
