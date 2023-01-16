// https://www.codewars.com/kata/5264d2b162488dc400000001
// December 12, 2022
function spinWords(string) {
	const words = string.split(' ');
	const newStr = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i].length >= 5) {
			let temp = '';
			for (let j = 1; j <= words[i].length; j++) {
				console.log(words[i][words[i].length - j]);
				temp += words[i][words[i].length - j];
			}
			newStr.push(temp);
		} else {
			newStr.push(words[i]);
		}
	}
	return newStr.join(' ');
}
