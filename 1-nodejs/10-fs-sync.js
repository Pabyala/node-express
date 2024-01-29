const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
// result => dispaly the text in the file(first and second);
// console.log(first, second)

// generate new file 'result-sync.txt' and inside the file has the value of ${first} and ${second};
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}, // it will generate agian the ${first}, ${second} when you run the code;
)

console.log('done with this task');
console.log('starting the next one');