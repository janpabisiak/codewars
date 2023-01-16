// https://www.codewars.com/kata/54da5a58ea159efa38000836
// January 13, 2023
function findOdd(A) {
	let obj = {};
	A.forEach((number) => {
		if (obj[number] !== undefined) {
			obj[number]++;
		} else {
			obj[number] = 1;
		}
	});

	for ([number, c] of Object.entries(obj)) {
		if (c % 2 === 1) return +number;
	}
}
