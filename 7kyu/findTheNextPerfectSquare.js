// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
// January 15, 2023
const findNextSquare = (sq) => (Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2));
