// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// January 15, 2023
function getCount(str) {
	let numbOfVowels = 0;
	for (let letter = 0; letter < str.length; letter++) {
		switch (str[letter]) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				numbOfVowels += 1;
		}
	}
	return numbOfVowels;
}
