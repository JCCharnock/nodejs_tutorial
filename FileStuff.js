 const fs=require('fs');
// //create a file
// fs.writeFile('example.txt','this\nis',
// (err)=>{
//     if (err)
//     {console.log(err)}  
//     else
//     {
//         console.log("success!");
//         fs.readFile('example.txt','utf8',(err,file)=>{
//         if (err) console.log(err);
//         else console.log(file);})
//     }
// });



// fs.rename('example2.txt','example3.txt',(err)=>{
//     if (err) console.log(err);
//     else console.log("yay!");
// });
// fs.appendFile('example3.txt','blah di blah',(err)=>{
//     if (err) console.log(err);
//     else console.log('sucessfully ...');
// })

fs.unlink('example3.txt',(err)=>{
        if (err) console.log(err);
        else console.log('sucessfully ...');
})