// https://www.codewars.com/kata/5848565e273af816fb000449
// January 15, 2023
const encryptThis = (text) => {
	const words = text.split(' ');
	let encrypted = '';
	words.forEach((word) => {
		const wordLength = word.length;
		if (wordLength > 2) word = word.slice(0, 1) + word[wordLength - 1] + word.slice(2, wordLength - 1) + word[1];
		encrypted += word.charCodeAt(0) ? word.charCodeAt(0) : '';
		encrypted += word[1] ? `${word.slice(1, wordLength)} ` : ' ';
	});
	return encrypted.slice(0, encrypted.length - 1);
};
