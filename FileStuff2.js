const fs=require('fs');

// fs.rmdir('tutenkamen',(err)=>{
//     if (err) console.log(err);
//     else console.log('sucessfully REMOVED directory ...');
// })

// fs.mkdir('tutenkamen',(err)=>{
//     if (err) console.log(err);
//     else {
//         console.log('sucessfully made dir...');
//         fs.writeFile('./tutenkamen/example5.txt','put this in the file',(err)=>{
//             if (err) console.log(err);
//             else console.log('sucessfully made file in dir...');
//         })
//     }
// });

fs.readdir('tutenkamen',(err,files)=>{
        if (err) console.log(err);
        else {
            console.log('sucessfully did whatever ...');
            console.log(files);
            for(let file of files){
                console.log(file);
                fs.unlink('./tutenkamen/'+file,(err)=>{
                    if (err){
                        console.log(err);
                    }
                    else{
                        console.log('sdf '+file);
                    }
                })
            }
        }
    }
)

