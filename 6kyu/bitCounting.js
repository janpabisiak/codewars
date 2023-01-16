// https://www.codewars.com/kata/526571aae218b8ee490006f4
// January 16, 2023
const countBits = (n) => {
	let text = '';
	while (n >= 1) {
		text += n % 2;
		n = Math.floor(n / 2);
	}
	return text
		.split('')
		.reverse()
		.filter((n) => n == 1).length;
};
