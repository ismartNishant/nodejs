const fs = require('fs');

const readStream = fs.createReadStream('./docs/bigfile.txt',{encoding : "utf8"});
const writeStream = fs.createWriteStream('./docs/mb.txt');

// readStream.on('data',(chunk) =>{
//     console.log("----------------------------New Chunk-------------------------------");
//     console.log(chunk);
//     writeStream.write("\n-----------------------------------NEW CHUNK-----------------------------------\n")
//     writeStream.write(chunk)
// })
readStream.pipe(writeStream);