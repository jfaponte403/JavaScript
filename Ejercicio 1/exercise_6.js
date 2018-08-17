const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cuadrado = (a) => {
    for (i=0; i<a; i++) {
        for (j=0; j<a; j++) {
            if (a-j > i) {
                process.stdout.write('° ');
            } else {
                process.stdout.write('/ ');
            }
        }
        process.stdout.write("\n"); 
    }  
}

process.stdout.write("Welcome \n");
process.stdout.write("Let's do a square where is consisting of two triangles  \n");
process.stdout.write("Please enter the number of square \n");

rl.on('line', (a) => {
    console.log(`Received: ${a}`);
    cuadrado(a);
    rl.close(); 
  });