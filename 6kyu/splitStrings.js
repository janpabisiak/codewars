// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// January 14, 2023
function solution(str) {
	const table = [];
	for (let i = 0; i < str.length; i += 2) {
		table.push(`${str[i]}${typeof str[i + 1] === 'undefined' ? '_' : str[i + 1]}`);
	}
	return table;
}
