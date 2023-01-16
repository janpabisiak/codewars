// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// January 16, 2023
const accum = (s) =>
	s
		.split('')
		.map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
		.join('-');
