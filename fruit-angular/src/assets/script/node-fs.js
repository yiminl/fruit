
// import * as fs from 'fs'
const fs = require('fs');
const ps = require('process');

//write file
// fs.writeFile('./cmd.txt', 'I love you!', err => {
//     if (err) {
//         console.log('write fail!');
//     } else {
//         console.log('wirte success!'); 
//     }
// })

//append file
// fs.appendFile('./cmd.txt', 'I love you too!', err => {
//     if (err) {
//         console.log('append fail!');
//     } else {
//         console.log('append success!'); 
//     }
// })

//write stream
// const writeStream = fs.createWriteStream('./流写入.txt');

// writeStream.write('一亩方糖\r\n');
// writeStream.write('天光云影\r\n');

// writeStream.close();


// const rs = fs.createReadStream('./流写入.txt');

// rs.on('data', chunk => {
//     console.log(chunk.length);
// })

// rs.on('end', chunk => {
//     console.log('读取成功');
// })

// const ws = fs.createWriteStream('./fruit-copy1.png');

// const rs = fs.createReadStream('./fruit-logo.png');
// rs.on('data', chunk => {
//     ws.write(chunk);
// })

// rs.on('end', () => {
//     console.log(ps.memoryUsage());
// });

// fs.rename('./fruit-copy1.png', './fruit-copy2.png', err => {
//     if (err) console.log('fail!');
//     else console.log('success!');
// });


fs.unlink('./fruit-copy2.png', err => {
        if (err) console.log('fail!');
        else console.log('success!');
    });