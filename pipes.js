const fs=require('fs');
const zlib=require('zlib');
//const gzip=zlib.createGzip();
const gunzip=zlib.createGunzip();
// const readStream=fs.createReadStream('largefile.txt',"utf8");
// const writeStream=fs.createWriteStream('newlargefile.txt.gz');
const readStream=fs.createReadStream('newlargefile.txt.gz');
const writeStream=fs.createWriteStream('largefile.txt',"utf8");
//readStream.pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);


