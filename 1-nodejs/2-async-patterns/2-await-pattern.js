const {readFile, writeFile} = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try{
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    // it will generate new file with name of result-mind-granade.txt
    await writeFile(
      './content/result-mind-granade.txt', 
      `THIS IS AWESOME : ${first} ${second}`,
      {flag: 'a'} // generate same value of the file in the same file;
    )
    
    console.log('Your 1st console:', first);
    console.log('Your 2nd console:', second);
  } catch (err){
    console.log(err);
  }
};
start();



// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if(err){
//         // if theres an error reject
//         reject(err);
//       } else {
//         // if everything is good resovle
//         resolve(data);
//       }
//     })
//   });
// };

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))