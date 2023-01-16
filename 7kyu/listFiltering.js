// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// January 13, 2023
function filter_list(l) {
	return l.filter((el) => typeof el === 'number' && +el >= 0);
}
