//part A Async

const fs = require('fs');

// fs.readFile('./texts/from.txt','utf8',(err,data)=>{
//     if(err)console.log(err);
//     console.log(data);
//     fs.writeFile('./texts/to.txt',data,err=>{
//         if(err)console.log(err);
//         console.log('File has been written in to.txt successfully!');
//     })
// })

//part B sync

// try{
//     let read_From = fs.readFileSync('./texts/from.txt','utf8')
//     console.log(read_From);
//     let write_To =fs.writeFileSync('./texts/to.txt',read_From)
//     console.log('File has been written in to.txt successfully!');
// }
// catch(err){
//     console.log(err.message);
// }

//part C sync

// fs.readFile('./texts/from.txt', 'utf8', (err, data_from) => {
//     if (err) console.log(err);
//     console.log(data_from);
//     fs.readFile('./texts/to.txt', 'utf8', (err, data_to) => {
//         if (err) console.log(err);
//         console.log(data_to);

//         fs.appendFile('./texts/append.txt', `  ${data_from} `, err => {
//             if (err) console.log(err);
//             console.log("successfully appended data_from");
//         })
//         fs.appendFile('./texts/append.txt', `  ${data_to} `, err => {
//             if (err) console.log(err);
//             console.log("successfully appended data_to");
//         })

//     })

// })

// part D

try {
    let read_From = fs.readFileSync('./texts/from.txt', 'utf8')
    console.log(read_From);
    let read_TO = fs.readFileSync('./texts/to.txt', 'utf8')
    console.log(read_TO);

    let write_From = fs.appendFileSync('./texts/append.txt', ` ${read_From} `)
    console.log('successfully appended write_From ');

    let write_To= fs.appendFileSync('./texts/append.txt', ` ${read_TO} `)
    console.log('successfully appended write_to ');


}

catch (err) {
    console.log(err.message);
}