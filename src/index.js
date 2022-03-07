import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';


class Header {
	constructor(settings= {}
	) {
		const defaultSettings= {
			header: true, title:settings?.lang!=="PL"?"Exercise":"To Do App", path:[], resultInConsole:false, fontAwesome:false, bulma:false, lang:"PL",
		}
		;
		this.settings= {
			...defaultSettings,
			...settings,
		}
		;
		this.init();
	}
	init() {
		document.addEventListener("DOMContentLoaded", ()=> {
			this.head=document.querySelector("head");
			this.body=document.querySelector("body");
			this.currentScript=this.head.querySelector('script[src*="-api"]');
			this.addStyles();
			this.addHeader();
			if(this.settings.resultInConsole) {
				this.addResultInConsole();
			}
			if(this.settings.fontAwesome) {
				this.addFontAwesome();
			}
		}
		);
	}
	addStyles() {
		const font=document.createElement("link");
		font.rel="stylesheet";
		font.href="https://fonts.googleapis.com/css2?family=AvertaStd:wght@400;500;700&display=swap";
		const bootstrap=document.createElement("link");
		bootstrap.rel="stylesheet";
		if(!this.settings.bulma) {
			bootstrap.href="./style.css";
		}
		else {
			bootstrap.href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css";
		}
		const style=document.createElement("style");
		style.innerHTML=` :root {
			--primary-color: #e83e8c;
			--color-black: #343a40;
			--color-light-grey: #6c757d;
		}
		body {
			font-family: "AvertaStd", sans-serif;
		}
		.navbar {
			background-color: var(--primary-color);
			color: var(--color-black);
		}
		.navbar-brand {
			font-weight: 400;
		}
		.breadcrumb-item {
			color: var(--color-light-grey);
		}
		.breadcrumb-item.active {
			color: var(--color-black);
			font-weight: 600;
		}
		`;
		this.head.insertBefore(bootstrap, this.currentScript);
		this.head.insertBefore(font, this.currentScript);
		this.head.insertBefore(style, this.currentScript);
	}
	addFontAwesome() {
		const $script=document.createElement("script");
		$script.src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js";
		this.head.insertBefore($script, this.currentScript);
	}
	addHeader() {
		const {
			title,
			path
		}
		=this.settings;
		const $header=document.createElement("header");
		$header.classList.add("mb-5");
		const $nav=document.createElement("nav");
		$nav.classList.add("navbar", "navbar-expand-lg", "justify-content-between");
		const $title=document.createElement("span");
		$title.classList.add("navbar-brand");
		$title.innerText=title;
		$nav.appendChild($title);
		$header.appendChild($nav);
		if(path.length>0) {
			const $ul=document.createElement("ul");
			$ul.classList.add("breadcrumb");
			path.forEach((el, i)=> {
				const $li=document.createElement("li");
				$li.classList.add("breadcrumb-item");
				$li.innerText=el;
				if(i===path.length-1) {
					$li.classList.add("active");
				}
				$ul.appendChild($li);
			}
			);
			$header.appendChild($ul);
		}
		if(!this.settings.header) {
			$header.style.display="none";
		}
		this.header=$header;
		this.body.insertBefore(this.header, this.body.firstChild);
	}
	addResultInConsole() {
		const $section=document.createElement("section");
		$section.classList.add("container", "mb-5");
		this.header.parentNode.insertBefore($section, this.header.nextSibling);
	}
}

window.CL=Header;
window.Header=Header;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
