const { error } = require('console');
const fs = require('fs');
let path = './public/fie.txt';

// /async

// fs.access(path,err=>{
//     if(err)console.log(err);
//     console.log(`${path} Exists `);
// })

// sync

try {
	if (fs.existsSync(path)) {
		console.log(`${path} Exists `);
	} else {
		console.log('such a file doesnt exist');
	}
} catch (err) {
	console.log(error); // what does this do?
}


