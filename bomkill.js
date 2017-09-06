var fs = require('fs');
var path = require('path');
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

var bomkiller = require('./killer');

function main(argv) {

    travel(argv[0], function (pathname) {
    	console.log(pathname);
        bomkiller.kill(pathname);
	});

}

main(process.argv.slice(2));