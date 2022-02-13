const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
// console.log(words);
const withoutA = anthem.split('a')
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5,13)
// console.log(smallSlice);

// substr
const anothePart = anthem.substr(11,6);
// console.log(anothePart);

// subString
const anotherPart = anthem.substring(11,15);
// console.log(anotherPart);

// concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibria');
// console.log(fullString);

// 
const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW');
console.log(allJoined);
