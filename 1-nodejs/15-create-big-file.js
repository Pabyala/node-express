const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
  // it will generate new file called big.txt; it will print Hello world 1, Hello world 2 ....
  writeFileSync('./content/big.txt', `Hello world ${i}\n`, { flag: 'a' })
}