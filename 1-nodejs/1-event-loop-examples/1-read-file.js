const { readFile } = require('fs');

console.log('started a first task')
// CHECK FILE PATH; the reason why readFile is the last execute is because asynchronous
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task')