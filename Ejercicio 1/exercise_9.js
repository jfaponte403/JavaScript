const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdout.write("Enter the text string you want to put upside down. \n");

rl.on('line', (a) => {
    const arregloOrdenado = [];
    const ArregloEntrada = a.split('');
    
    for(i=ArregloEntrada.length-1; i>=0; i--){
        arregloOrdenado.push(ArregloEntrada[i]);
    }

    console.log(arregloOrdenado.join(""));
    rl.close();
}); 