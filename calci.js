const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
rl.question("What do you want to perform ? 1. add 2. diff 3. product 4. div ", function(ch){
rl.question("Number 1 : ", function(num1) {
rl.question("Number 2 : ", function(num2) {
    switch(ch){
        case '1' : console.log(`Sum result is ${Number(num1) + Number(num2)}`);
        break;
        case '2' : console.log(`Difference result is ${Number(num1) - Number(num2)}`);
        break;
        case '3' : console.log(`Product result is ${Number(num1) * Number(num2)}`);
        break;
        case '4' : console.log(`Division result is ${Number(num1) / Number(num2)}`);
        break;
    }

    rl.close();
    });
  });
});

// As you see we can call different functions during operation.
rl.on("close", function() {
console.log("\nBYE BYE !!!");
process.exit(0);
});