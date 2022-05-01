
const fs = require('fs');
const file = fs.readFileSync('test.txt', 'utf-8');

//Softwire email count
const softwireEmailRegex = /@softwire\.com\b/g
const softwireEmailMatches = file.match(softwireEmailRegex); 
console.log(softwireEmailMatches.length);

// All-domain count
const domainRegex = /@(\S+)\b/g // any positive number of char (let, dig, symbols) that are not spaces
const domainMatches = file.match(domainRegex);
console.log(domainMatches.length);

// list of all different domains 
let domainSet = new Set(domainMatches);
console.log(domainSet, domainSet.size);


// // need to find non-hard coding way to create the object
// const domainLibrary = {
//   '@my-email.net': 0,
//   '@techswitch.co.uk': 0,
//   '@gmail.com': 0,
//   '@outlook.com' : 0,
//   '@kiwimail.co.nz': 0,
//   '@swi.re' : 0,
//   '@aol.com' : 0,
//   '@hotmail.fr' : 0,
//   '@hotmail.co.uk' : 0,
//   '@softwire.com' : 0,
//   '@facebook.com' : 0,
//   '@hotmail.com': 0,
//   '@yandex.ru': 0,
//   '@softwire.co.uk' : 0,
//   '@softwire.comet.net' : 0
// }

// for (let elem of domainMatches) {
//     if(domainLibrary.hasOwnProperty(elem)) {
//         domainLibrary[elem]++
//     }
// }
// console.log(domainLibrary)


//const substring = '@softwire.com'
//const fileToArray = file.split(' ');
//let filteredEmailArray = fileToArray.filter(elem => elem.endsWith('@softwire.com')); //PROBLEM WITH /n/ BEING INCLUDED
//console.log(filteredEmailArray, filteredEmailArray.length);


// ///Jordan's solution


// const fs = require("fs");
// const file = fs.readFileSync("test.txt", "utf-8");

// // Exercise 1
// const linesInFile = file.toLowerCase().split("\r\n");
// const wordsInFile = [];

// linesInFile.forEach((line) => {
//   const words = line.split(" ");
//   words.forEach((word) => wordsInFile.push(word));
// });

// const softwireEmailAddresses = wordsInFile.filter(
//   (word) => word.includes("@softwire.com") && !word.endsWith(".comet.net")
// );

// console.log(
//   `Number of softwire email addresses found without Regex: ${softwireEmailAddresses.length}`
// );

// //Exercise 2
// const regexForSoftwireOnly = /@softwire\.com\s/g;
// const foundMatches = file.match(regexForSoftwireOnly);
// console.log(
//   `Number of softwire email addresses found Regex: ${foundMatches.length}`
// );

// //Exercise 3
// const regexForAllEmails = /\b@(\S+)\b/g;
// const emailDomains = file.match(regexForAllEmails);

// console.log(
//   `Number of total email addresses found Regex: ${emailDomains.length}`
// );

// //Exercise 4
// const emailCountsUnsorted = {};
// emailDomains.forEach((domainName) => {
//   if (emailCountsUnsorted.hasOwnProperty(domainName)) {
//     emailCountsUnsorted[domainName]++;
//   } else {
//     emailCountsUnsorted[domainName] = 1;
//   }
// });

// for (const [key, value] of Object.entries(emailCountsUnsorted)) {
//   console.log(`${key}: ${value}`);
// }


