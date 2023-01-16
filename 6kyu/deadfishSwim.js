// https://www.codewars.com/kata/51e0007c1f9378fa810002a9
// January 13, 2023
function parse(data) {
	const arrayOfLetters = data.split('');
	let value = 0;
	const arrayOfOutputs = [];
	for (const letter of arrayOfLetters) {
		if (letter === 'i') value++;
		if (letter === 'd') value--;
		if (letter === 's') value **= 2;
		if (letter === 'o') arrayOfOutputs.push(value);
	}
	return arrayOfOutputs;
}
