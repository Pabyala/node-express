const path = require('path');

console.log(path.sep);

// file path. result \content\subfolder\test.txt
const filePath = path.join('/content/', 'subfolder', 'test.txt') ;
console.log(filePath);

// file name. result test.txt
const base = path.basename(filePath);
console.log(base);

// file detials. result C:\Eleomar\Web\Node Js\tutorial\content\subfolder\test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)