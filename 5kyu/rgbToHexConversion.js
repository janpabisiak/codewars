// https://www.codewars.com/kata/513e08acc600c94f01000001
// January 13, 2023
function rgb(r, g, b) {
	let red, green, blue;
	if (r > 255) {
		red = 'FF';
	} else {
		red = r.toString(16);
	}
	red = red < 0 ? '0' : red;
	red = red.length < 2 ? red.padStart(2, '0') : red;
	if (g > 255) {
		green = 'FF';
	} else {
		green = g.toString(16);
	}
	green = green < 0 ? '0' : green;
	green = green.length < 2 ? green.padStart(2, '0') : green;
	if (b > 255) {
		blue = 'FF';
	} else {
		blue = b.toString(16);
	}
	blue = blue < 0 ? '0' : blue;
	blue = blue.length < 2 ? blue.padStart(2, '0') : blue;
	return `${red.toUpperCase()}${green.toUpperCase()}${blue.toUpperCase()}`;
}
