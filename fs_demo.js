const fs = require("fs");
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
//     if (err) throw err;
//     console.log("folder created...");
// });

//Create and write to file, overwrite
// fs.writeFile(path.join(__dirname,'/test',"hello.txt"),"Hello World", err => {
//     if (err) throw err;
//     console.log("File written to...");
// });

//Create and write to file
fs.writeFile(path.join(__dirname,'/test',"hello.txt"),"Hello World", err => {
    if (err) throw err;
    console.log("File written to...");
});
