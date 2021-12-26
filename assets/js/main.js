const navMenu = document.getElementById("main-nav");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");

navOpen.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.getElementById("main-nav");

	navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ACTIVE SECTION LINK ============================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		sectionId = section.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".main-nav a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".main-nav a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// CHANGE THE BACKGROUND ON SCROLL =========================
function changeHeaderColor() {
	const nav = document.getElementById("header");

	if (this.scrollY >= 200) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);
