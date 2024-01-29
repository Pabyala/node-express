const { readFile, writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    // display the first.txt
    // console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        // generate new file 'result-sync.txt' and inside the file has the value of ${first} and ${second};
        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next task');
