window.addEventListener('scroll', onScroll);

function onScroll() {
	showNavOnScroll();
	showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
	if (scrollY > 0) return navigation.classList.add('scroll');

	return navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
	if (scrollY > 550) return backToTopButton.classList.add('show');

	return backToTopButton.classList.remove('show');
}

function openMenu() {
	document.body.classList.add('menu-expanded');
}

function closeMenu() {
	document.body.classList.remove('menu-expanded');
}

ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
}).reveal(
	'.c-home, .c-home .c-img, .c-home__stats, #services, #services header, #services .c-card, #about, #about header, #about content'
);
