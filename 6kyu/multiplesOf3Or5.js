// https://www.codewars.com/kata/514b92a657cdc65150000006
// December 12, 2022
function solution(number) {
	let dividers = [];
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			dividers.push(i);
		}
	}
	for (let i = 0; i < dividers.length; i++) {
		sum += dividers[i];
	}
	return sum;
}
