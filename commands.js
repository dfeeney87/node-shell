// var exports = module.exports = {};
var fs = require('fs');

module.exports = {
    // cmd: process.stdin.on('data', function(data){
    //     return data.toString().trim().split(' ')[0];
    // }),
    
    pwd: process.stdin.on('data', function(data) {
        var cmd = data.toString().trim();
            if (cmd === 'pwd') {
            process.stdout.write(process.argv[1]);
            process.stdout.write('\nprompt > ');
        }
    }),
    ls:  process.stdin.on('data', function(data) {
        var cmd = data.toString().trim();
    
        if (cmd === 'ls') {
            fs.readdir('.', function(err, files) {
                if (err) throw err;
                files.forEach(function(file) {
                  process.stdout.write(file.toString() + "\n");
                })
                process.stdout.write("prompt > ");
              });
        }
    }),
    echo: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "echo") {
            process.stdout.write(pieces.slice(1).join(' '));
        } 
        // process.stdout.write("prompt > ");
    }),

    cat: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "cat") {
            fs.readFile(pieces.slice(1).toString(), (err, data)=> {
                if (err) throw err;
                // console.log(data);
                process.stdout.write(data);
                process.stdout.write("prompt > ");
            })
        }
        // process.stdout.write("prompt > ");
    }),

    head: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "head") {
            fs.readFile(pieces.slice(1).toString(), (err, data)=> {
                if (err) throw err;
                // console.log(data)
                // data = 
                data = data.toString('utf8').split("\n").slice(0,5).join("\n");
                // console.log(data);
                process.stdout.write(data + '\n');
                process.stdout.write("prompt > ");
            })
        }
        // process.stdout.write("prompt > ");
    }),
    tail: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "tail") {
            fs.readFile(pieces.slice(1).toString(), (err, data)=> {
                if (err) throw err;
                // console.log(data)
                // data = 
                data = data.toString('utf8').split("\n").slice(-5).join("\n");
                // console.log(data);
                process.stdout.write(data + '\n');
                process.stdout.write("prompt > ");
            })
        }
        // process.stdout.write("prompt > ");
    }),

    sort: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "sort") {
            fs.readFile(pieces.slice(1).toString(), (err, data)=> {
                if (err) throw err;
                // console.log(data);
                data = data.toString('utf8').split("\n").sort().join("\n");
                process.stdout.write(data + '\n');
                process.stdout.write("prompt > ");
            })
        }
        // process.stdout.write("prompt > ");
    }),

    wc: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "wc") {
            fs.readFile(pieces.slice(1).toString(), (err, data)=> {
                if (err) throw err;
                // console.log(data);
                var dataLength = data.toString('utf8').split("\n").length;
                var dataWords = data.toString('utf8').split(" ").length;
                var dataBytes = data.toString().split("").length;
                process.stdout.write(dataLength + " " + dataWords + " " + dataBytes + '\n');
                process.stdout.write("prompt > ");
            })
        }
        // process.stdout.write("prompt > ");
    }),

    uniq: process.stdin.on('data', function(data){
        var cmd = data.toString().trim();
        var pieces = cmd.split(' ')
        if (pieces[0]=== "uniq") {
            fs.readFile(pieces.slice(1).toString(), (err, data)=> {
                if (err) throw err;
                // console.log(data);
                var arrOfLines = data.toString('utf8').split("\n");

                var outputEq = []; 
                arrOfLines.forEach((elle,ind) => {
                    if(ind === 0) {
                        outputEq.push(elle);
                    }
                    else if (elle[ind] !== elle[ind-1]) {
                        outputEq.push(elle);
                    } 
                });

                process.stdout.write(outputEq + '\n');
                process.stdout.write("prompt > ");
            })
        }
        // process.stdout.write("prompt > ");
    }),
}