// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// January 16, 2023
function findOutlier(integers) {
	const types = { odd: [], even: [] };
	integers.forEach((n) => (Math.abs(n) % 2 === 1 ? types.odd.push(n) : types.even.push(n)));
	return types.odd.length === 1 ? types.odd[0] : types.even[0];
}
