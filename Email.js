
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

//list and counter of all different domains (poptentially with Set but I dont know how to manipulate)
const domainCount = {};

for (const element of domainMatches) {
  if (domainCount[element]) {
    domainCount[element] += 1;
  } else {
    domainCount[element] = 1;
  }
}

//object => data passed to array to sort & manipulate
let sortedDomains = [];
for (let domainKeyValue in domainCount) {
  sortedDomains.push([domainKeyValue, domainCount[domainKeyValue]]);
}
sortedDomains.sort((a, b) => b[1] - a[1]);

const popularDomains = sortedDomains.splice(0,10);
console.log(popularDomains);

for (let i = 0; i < popularDomains.length; i++) {
  console.log(`The number ${i+1} popular domain is ${popularDomains[i][0]}, with ${popularDomains[i][1]} users identified`)
}