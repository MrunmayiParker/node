const fs = require('fs')


//Creating a file

fs.open("lab_assignment.txt", 'w', function(err, file){
    if(err){
        console.log(err);
    }
    else{
        console.log('File Created Successfully');
    }
})

//Writing to a file

fs.writeFile('lab_assignment.txt', 'Writing to a file', function(err, file){
    if(err){
        console.log(err);
    }
    else{
        console.log('Written Successfully');
    }
})

//Reading a file

var file = fs.readfileSync('lab_assignment.txt', 'utf-8')

console.log(file)

//Rename a file

fs.rename('lab_assignment.txt', 'lab_assignment1.txt', function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File renamed sucessfully");
    }
})

//Deleting a file

fs.unlink('lab_assignment1.txt', function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted sucessfully");
    }
})

fs.stat("node_modules", function(err, stats){
    if(err) console.log(err);
    console.log(stats);

    console.log("is file?", stats.isFile());
    console.log("is directory?", stats.isDirectory());
})