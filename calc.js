const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("choose options 1.add 2.sub 3.multiply 4.divide", function(choose){
r1.question('enter first num ', function(num1){
r1.question('enter second num', function(num2){
    switch(choose){
        case '1':
            console.log(`${Number(num1) + Number(num2)}`);
            break;
        case '2':
            console.log(`${Number(num1) - Number(num2)}`);
            break;

        case '3':
            console.log(`${Number(num1) * Number(num2)}`);
            break;

        case '4':
            console.log(`${Number(num1) % Number(num2)}`);
            break;

    }
    r1.close();
})

})
});
