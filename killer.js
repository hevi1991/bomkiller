var fs = require('fs');
function bomkill(pathname) {
    var bin = fs.readFileSync(pathname);
    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3);
        fs.writeFileSync(pathname, bin);
        console.log(pathname,'has been killed.');
    }
}

//bomkill(process.argv.slice(2)[0])

exports.kill =  bomkill;