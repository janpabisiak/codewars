// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// January 15, 2023
function descendingOrder(n) {
	return +String(n)
		.split('')
		.sort((a, b) => b - a)
		.join('');
}
