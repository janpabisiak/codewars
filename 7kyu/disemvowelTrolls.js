// https://www.codewars.com/kata/52fba66badcd10859f00097e
// November 28, 2022
function disemvowel(str) {
	const arrOfVowels = ['a', 'e', 'i', 'u', 'o'];
	let strWithoutVowels = '';
	for (let i = 0; i < str.length; i++) if (arrOfVowels.indexOf(str[i].toLowerCase()) === -1) strWithoutVowels += str[i];
	return strWithoutVowels;
}
