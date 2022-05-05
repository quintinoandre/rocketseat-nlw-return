function onScroll() {
	if (scrollY > 0) return navigation.classList.add('scroll');

	return navigation.classList.remove('scroll');
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
