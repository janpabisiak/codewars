// https://www.codewars.com/kata/5413759479ba273f8100003d
// January 15, 2023
const reverse = (array) => {
	let newArr = [];
	for (let i = array.length - 1; i >= 0; i--) {
		newArr.push(array[i]);
	}
	return newArr;
};
