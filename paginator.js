
/* PAGINATOR LIGHT SWITCH */
if ( firstLink !== undefined) {

	let activeLink = document.querySelector('.default-paginator-2 .first-link');
	activeLink.classList.add('paginator-active');

	let switchLink = document.querySelector('.default-paginator-2 .container-i.down');

	switchLink.style.color = 'gainsboro';
	switchLink.removeAttribute('href');

} else if (lastLink !== undefined) {

	let switchLink = document.querySelector('.default-paginator-2 .container-i.up');

	switchLink.style.color = 'gainsboro';
	switchLink.removeAttribute('href');
}
/* PAGINATOR LIGHT SWITCH */


/* PAGINATOR LIGHT LINK */

let paginatorContainer;

paginatorContainer = document.querySelector('.default-paginator-2');

function activeLinkPaginator() {
	let href = document.location.search;
	let link = document.querySelector(`.default-paginator-2 a[href$="${href}"`);

	if (!link) return;
	link.closest('a').classList.add('paginator-active');
}

if (paginatorContainer !== null) {
	activeLinkPaginator();
}

/* end PAGINATOR LIGHT LINK */