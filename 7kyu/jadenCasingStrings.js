// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// January 15, 2023
String.prototype.toJadenCase = function () {
	return this.split(' ')
		.map((item) => item[0].toUpperCase() + item.slice(1))
		.join(' ');
};
