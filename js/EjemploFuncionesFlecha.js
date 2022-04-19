console.log('------------------Ejemplo de funciones Normal')

function sumer(a , b){
    return a + b;
}

const resultado = sumer(2,3);
console.log(resultado);

// funciones flechas
console.log('-----------------funciones flechas')
const FuncionSumar = par1 => console.log(`resultado funciones flecha' ${par1}`);
FuncionSumar('Nicolas Jimenez');

// Ejemplo de clases

console.log('-----------------Ejemplo de clases e instancias')
class perro {
    constructor(nombre , apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    mostrarDatos = () => console.log(`${this.nombre} ${this.apellido} `);
}

let instancia1 = new perro("Pepe" , "Romano");
instancia1.mostrarDatos();

let instancia2 = new perro("Moni" , "Juncos");
instancia2.mostrarDatos();