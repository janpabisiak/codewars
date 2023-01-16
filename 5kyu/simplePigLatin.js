// https://www.codewars.com/kata/520b9d2ad5c005041100000f
// January 13, 2023
function pigIt(str) {
	const arrayOfWords = str.split(' ');
	let latin = '';
	arrayOfWords.forEach((word) => {
		let temp = word.split('');
		temp.push(word[0]);
		temp.shift(word[0]);
		const charCode = String(temp).charCodeAt(0);
		if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
			latin += `${temp.join('')}ay `;
		} else {
			latin += `${temp.join('')}`;
		}
	});
	return `${latin[latin.length - 1] === ' ' ? latin.slice(0, -1) : latin}`;
}
