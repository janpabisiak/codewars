// https://www.codewars.com/kata/546e2562b03326a88e000020
// November 28, 2022
function squareDigits(num) {
	let str = '';
	num = String(num);
	for (let i = 0; i < num.length; i++) str += Number(num[i]) ** 2;
	return Number(str);
}
