// https://www.codewars.com/kata/541c8630095125aba6000c00
// January 16, 2023
function digitalRoot(n) {
	const result = String(n)
		.split('')
		.map((el) => Number(el))
		.reduce((el, sum) => sum + el);
	if (String(result).length > 1) {
		return digitalRoot(result);
	}
	return result;
}
