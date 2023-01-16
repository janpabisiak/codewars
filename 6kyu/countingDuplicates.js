// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// January 16, 2023
function duplicateCount(text) {
	let counter = {};
	text.toLowerCase()
		.split('')
		.forEach((letter) => {
			if (typeof counter[`${letter}`] === 'undefined') {
				counter[`${letter}`] = 1;
			} else {
				counter[`${letter}`]++;
			}
		});
	let duplicates = 0;
	for (occurrences of Object.values(counter)) {
		if (occurrences > 1) duplicates++;
	}
	return duplicates;
}
