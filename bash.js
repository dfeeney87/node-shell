// console.log(Object.keys(process));
// 2
// 3
// 3
// console.log(Object.values(process));
// 5
process.stdout.write('prompt> ');

process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();
    var pieces = cmd.split(' ');
    cmd = pieces[0];
    // if (pieces[0]=== "echo") {
    //     process.stdout.write(pieces.slice(1).join(' '));
    // } 
    
    // var cmd = data.toString().trim();

    // if (cmd === 'pwd') {
    //     process.stdout.write(process.argv[1]);
    // }

    // process.stdout.write('You typed ' + cmd);

    var date = new Date().toString();

    if (cmd === 'date') {
        process.stdout.write(date);
        process.stdout.write('\nprompt > ');
    }

});

var addCmds = require('./commands.js');
