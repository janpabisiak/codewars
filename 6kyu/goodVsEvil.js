// https://www.codewars.com/kata/52761ee4cffbc69732000738
// January 15, 2023
function goodVsEvil(good, evil) {
	const worths = [
		[1, 2, 3, 3, 4, 10],
		[1, 2, 2, 2, 3, 5, 10],
	];
	const strengths = [];
	let argIndex = -1;
	for (arg of arguments) {
		argIndex += 1;
		strengths.push(
			arg
				.split(' ')
				.map((entity, i) => entity * worths[argIndex][i])
				.reduce((entityStrength, sum) => sum + entityStrength)
		);
	}

	if (strengths[0] > strengths[1]) {
		return 'Battle Result: Good triumphs over Evil';
	} else if (strengths[0] < strengths[1]) {
		return 'Battle Result: Evil eradicates all trace of Good';
	} else {
		return 'Battle Result: No victor on this battle field';
	}
}
