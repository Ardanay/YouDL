// ==UserScript==
// @name YouDL
// @description YouDL companion.
// @author Desmodus
// @version 1.0
// @date 2021-10-10
// @namespace   https://github.com/Ardanay/YouDL
// @homepageURL https://github.com/Ardanay/YouDL
// @downloadURL https://github.com/Ardanay/YouDL
// @updateURL   https://github.com/Ardanay/YouDL/raw/master/YouDL.user.js
// @icon data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' version='1'%3E%3Cpath style='opacity:0.2' d='M 13.697671,26.982025 C 9.069712,26.892268 7.1912902,26.813016 6.0426461,26.659053 5.2003012,26.546141 4.7866292,26.436065 4.3200722,26.200682 3.5494983,25.811925 3.0702643,25.269824 2.7244154,24.395704 2.4082114,23.596535 2.2794604,22.961792 2.1613004,21.6195 c -0.133343,-1.514785 -0.143766,-1.789015 -0.157612,-4.149165 -0.01631,-2.775543 0.01652,-3.685064 0.199185,-5.527319 0.095788,-0.965804 0.235396,-1.607662 0.497721,-2.2883106 C 2.9394973,9.0348518 3.1576103,8.6927618 3.5542793,8.3157818 4.0528193,7.8419882 4.6003382,7.5539689 5.2915322,7.4019246 6.3232202,7.1749782 10.986291,6.9999996 16.002407,6.9999996 c 5.016116,0 9.679187,0.1749786 10.710874,0.401925 0.746109,0.1641264 1.293705,0.4672843 1.827987,1.0120007 0.418166,0.4263315 0.633542,0.8137236 0.889847,1.6005967 0.264096,0.810781 0.365379,1.528316 0.515445,3.651661 0.07126,1.008346 0.07125,5.650096 0,6.657946 -0.08338,1.179026 -0.185696,2.228978 -0.253827,2.604671 -0.175154,0.96589 -0.519162,1.87023 -0.907011,2.384407 -0.266098,0.352765 -0.791392,0.773091 -1.230649,0.984729 -0.444787,0.214304 -0.86856,0.320549 -1.551724,0.389055 -2.116947,0.212278 -8.58142,0.367272 -12.30565,0.295034 z'/%3E%3Cpath style='fill:%23c2352a' d='M 13.697671,25.982025 C 9.069712,25.892268 7.1912902,25.813016 6.0426461,25.659053 5.2003012,25.546141 4.7866292,25.436065 4.3200722,25.200682 3.5494983,24.811925 3.0702643,24.269824 2.7244154,23.395704 2.4082114,22.596535 2.2794604,21.961792 2.1613004,20.6195 2.0279574,19.104715 2.0175344,18.830485 2.0036884,16.470335 1.9873784,13.694792 2.0202084,12.785271 2.2028734,10.943016 2.2986614,9.9772122 2.4382694,9.3353544 2.7005944,8.6547058 2.9394973,8.0348522 3.1576103,7.6927622 3.5542793,7.3157822 4.0528193,6.8419886 4.6003382,6.5539693 5.2915322,6.401925 6.3232202,6.1749786 10.986291,6 16.002407,6 c 5.016116,0 9.679187,0.1749786 10.710874,0.401925 0.746109,0.1641264 1.293705,0.4672843 1.827987,1.0120007 0.418166,0.4263315 0.633542,0.8137236 0.889847,1.6005965 0.264096,0.8107807 0.365379,1.5283158 0.515445,3.6516608 0.07126,1.008346 0.07125,5.650096 0,6.657946 -0.08338,1.179026 -0.185696,2.228978 -0.253827,2.604671 -0.175154,0.96589 -0.519162,1.87023 -0.907011,2.384407 -0.266098,0.352765 -0.791392,0.773091 -1.230649,0.984729 -0.444787,0.214304 -0.86856,0.320549 -1.551724,0.389055 -2.116947,0.212278 -8.58142,0.367272 -12.30565,0.295034 z'/%3E%3Cpath style='opacity:0.2' d='m 16.116582,19.265163 c 3.968607,-2.257951 3.883277,-2.208427 3.883277,-2.253758 0,-0.04242 -6.946498,-4.034251 -6.980369,-4.011279 -0.02288,0.01553 -0.02713,7.967633 -0.0046,7.992726 0.0085,0.0092 0.03251,0.0096 0.05341,7.33e-4 0.02091,-0.0089 1.392524,-0.786648 3.047958,-1.728509 z'/%3E%3Cpath style='fill:%23ffffff' d='m 16.116582,18.265149 c 3.968607,-2.257951 3.883277,-2.208427 3.883277,-2.253758 0,-0.04242 -6.946498,-4.034251 -6.980369,-4.011279 -0.02288,0.01553 -0.02713,7.967633 -0.0046,7.992726 0.0085,0.0092 0.03251,0.0096 0.05341,7.33e-4 0.02091,-0.0089 1.392524,-0.786648 3.047958,-1.728509 z'/%3E%3Cpath style='opacity:0.2;fill:%23ffffff' d='M 16.001953,6 C 10.985837,6 6.3227036,6.1753973 5.2910156,6.4023438 4.5998216,6.554388 4.0532275,6.8426126 3.5546875,7.3164062 3.1580185,7.6933862 2.9400748,8.0344433 2.7011719,8.6542969 2.4388469,9.3349455 2.298913,9.9775556 2.203125,10.943359 2.02046,12.785614 1.9875962,13.69516 2.0039062,16.470703 c 0.00107,0.182223 0.00477,0.210256 0.00586,0.369141 C 2.0049858,14.659508 2.0389673,13.59896 2.203125,11.943359 2.298913,10.977555 2.4388469,10.334945 2.7011719,9.6542969 2.9400748,9.0344433 3.1580185,8.6933862 3.5546875,8.3164062 4.0532275,7.8426127 4.5998216,7.554388 5.2910156,7.4023438 6.3227036,7.1753973 10.985837,7 16.001953,7 c 5.016116,0 9.679251,0.1753974 10.710938,0.4023438 0.746109,0.1641263 1.293843,0.4670023 1.828125,1.0117187 0.418166,0.4263315 0.63432,0.8127363 0.890625,1.5996095 0.264096,0.810781 0.365559,1.528999 0.515625,3.652344 0.03028,0.428473 0.04038,1.64708 0.04492,2.830078 0.0062,-1.601057 -0.0039,-3.250161 -0.04492,-3.830078 C 29.7972,10.542671 29.695737,9.8244526 29.431641,9.0136719 29.175336,8.226799 28.959182,7.840394 28.541016,7.4140625 28.006734,6.8693461 27.459,6.5664701 26.712891,6.4023438 25.681204,6.1753973 21.018069,6 16.001953,6 Z'/%3E%3Cg%3E%3Ccircle style='fill:%2303a9f4' cx='24.5' cy='23.5' r='7.5'/%3E%3Cpath style='fill:%23ffffff' d='m 26,19 v 4 h 1.5 l -3,4 -3,-4 H 23 v -4 z m -5,8.0002 h 7 v 1 h -7 z'/%3E%3Cpath style='opacity:0.2' d='M 31.979,23.947 A 7.5,7.5 0 0 1 24.5,31 7.5,7.5 0 0 1 17.021,24.053 7.5,7.5 0 0 0 17,24.5 7.5,7.5 0 0 0 24.5,32 7.5,7.5 0 0 0 32,24.5 7.5,7.5 0 0 0 31.979,23.947 Z'/%3E%3C/g%3E%3C/svg%3E%0A
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license CC BY-NC-ND 4.0 International. https://creativecommons.org/licenses/by-nc-nd/4.0/
// @match *://*.youtube.com/*
// ==/UserScript==

(() => {
	'use strict';

	setInterval(() => {
		let currentURL = document.location.href;
		if (document.location.href.indexOf('watch?v=') > -1) {
			if (isYouDLButtonExists('YouDL_V')) {
				document.getElementById('YouDL_V').firstChild.href =
					'v' + currentURL;
			} else {
				AddYouDLButton(
					'v' + currentURL,
					'YouDL_V',
					'[id=subscribe-button][class*=ytd-video-secondary-info-renderer]',
					'none'
				);
			}
			if (document.location.href.indexOf('&list=') > -1) {
				if (isYouDLButtonExists('YouDL_VP')) {
					document.getElementById('YouDL_VP').firstChild.href =
						'vp' + currentURL;
				} else {
					AddYouDLButton(
						'vp' + currentURL,
						'YouDL_VP',
						'[id=playlist-action-menu][class*=ytd-playlist-panel-renderer]',
						null
					);
				}
			}
			showButton();
		} else if (document.location.href.indexOf('playlist?list=') > -1) {
			if (isYouDLButtonExists('YouDL_P')) {
				document.getElementById('YouDL_P').firstChild.href =
					'vp' + currentURL;
			} else {
				AddYouDLButton(
					'vp' + currentURL,
					'YouDL_P',
					'[id=menu][class*=ytd-playlist-sidebar-primary-info-renderer]',
					null
				);
			}
		}
	}, 250);

	function isYouDLButtonExists(id) {
		return document.getElementById(id) !== null;
	}

	function AddYouDLButton(url, id, parentSelector, display) {
		let button = createButton(url, id, display);
		let section = document.querySelector(parentSelector);
		if (section) {
			section.firstChild.insertBefore(
				button,
				section.firstChild.firstChild
			);
		}
	}

	function showButton() {
		let buttonStyle = document.getElementById('YouDL_V').style
		if (document.querySelector('[class^=ytp-live-badge]')?.attributes.disabled.value === 'true') {
			buttonStyle.display = null;
		} else {
			buttonStyle.display = 'none';
		}
	}

	function createButton(url, id, display) {
		let container = document.createElement('span');
		let button = document.createElement('a');
		container.appendChild(button);

		button.innerHTML = '&#129095;';

		container.id = id;
		container.style.margin = '4px 8px';
		container.style.display = display;

		button.style.cursor = 'pointer';
		button.style.backgroundColor = 'transparent';
		button.style.color = 'var(--yt-spec-icon-inactive)';
		button.style.border = '0';
		button.style.fontSize = '2.0em';
		button.style.fontFamily = 'inherit';
		button.style.textAlign = 'center';
		button.style.textDecoration = 'underline';
		button.href = url;
		button.title = 'YouDL';
		button.target = '_blank';

		return container;
	}
})();
