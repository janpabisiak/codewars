// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
// November 27, 2022
function DNAStrand(dna) {
	str = '';
	for (let i = 0; i < dna.length; i++) {
		switch (dna[i]) {
			case 'A':
				str += 'T';
				break;
			case 'T':
				str += 'A';
				break;
			case 'G':
				str += 'C';
				break;
			default:
				str += 'G';
		}
	}
	return str;
}
