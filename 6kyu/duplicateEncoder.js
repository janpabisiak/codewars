// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// January 16, 2023
function duplicateEncode(word) {
	word = word.toLowerCase().split('');
	const letters = {};
	let encoded = '';
	for (const letter of word) {
		if (typeof letters[`${letter}`] !== 'undefined') {
			letters[`${letter}`]++;
		} else {
			letters[`${letter}`] = 1;
		}
	}
	console.log(letters);
	for (const letter of word) {
		if (letters[`${letter}`] > 1) {
			encoded += ')';
		} else {
			encoded += '(';
		}
	}
	return encoded;
}
