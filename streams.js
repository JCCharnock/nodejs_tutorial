const fs = require("fs");
// fs.readFile("largefile.txt",(err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });
var count=0;
const readStream = fs.createReadStream("./example.txt", "utf8");
//const writeStream = fs.createWriteStream("newplace.txt");
readStream.on("data", chunk => {
  count=count+1;
  console.log(count);
  //console.log(chunk);
  //writeStream.write(chunk)
});

