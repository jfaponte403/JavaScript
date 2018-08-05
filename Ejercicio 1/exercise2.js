// a[0] = heigt   a[1] = width

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const printMatrix = (width, height) => {
    for(j=0; j<height; j++){
        for(i=0; i<width; i++){
            process.stdout.write("° ");
            if(i === (width-1)){
                process.stdout.write("\n");
            }
        } 
    } 
}

rl.write("Welcome to my second fucking program. \n");
rl.write("you going to do a quadrilateral with your dimensions. \n");
rl.write(`Please write the values in the order width and heigt.  \n`)
let a = [];

rl.on('line', (input) => {
    a.push(input);
    if(a.length === 2){
        rl.write(`You large is ${a[0]} and your width is ${a[1]} \n \n`);
        printMatrix(a[0], a[1]);
        rl.close();
    }
});

