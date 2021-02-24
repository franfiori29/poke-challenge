export const firstPage = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5';
export const goToPage = (page) =>
	`https://pokeapi.co/api/v2/pokemon?offset=${page * 5 - 5}&limit=5`;

export const getPageNumberFromUrl = (url) =>
	1 + url.substring(url.indexOf('offset=') + 7, url.indexOf('&limit')) / 5;

export const stats = {
	en: ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL-ATTACK', 'SPECIAL-DEFENSE', 'SPEED'],
	es: [
		'PS',
		'ATAQUE',
		'DEFENSA',
		'ATAQUE-ESPECIAL',
		'DEFENSA-ESPECIAL',
		'VELOCIDAD',
	],
};
