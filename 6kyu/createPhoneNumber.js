// https://www.codewars.com/kata/525f50e3b73515a6db000b83
// January 16, 2023
const createPhoneNumber = (numbers) => {
	const phoneNumber = numbers.join('');
	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 11)}`;
};
