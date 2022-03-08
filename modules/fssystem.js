const fs = require('fs');

//reading file
// fs.readFile('./docs/bigfile.txt',(err,data) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log("running tis first")

//writing file
// fs.writeFile('./docs/ms.txt', "I can make you mine", () => {
//     console.log("file was written");
// })

//directories
// if (!fs.existsSync('./dirrr')) {
//     fs.mkdir("./dirrr", (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("was created")
//     })
// }
// else {
//     fs.rmdir('./dirrr', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("was deleted")
//     })
// }

//deleting the file

// if (fs.existsSync('./docs/my.txt')) {
//     fs.unlink('./docs/my.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//     })
//     console.log("file is deleed")
// }
