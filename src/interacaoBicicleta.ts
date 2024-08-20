//Importar a classe que quer utilizar
import { Bicicleta } from './Bicicleta';

//Instanciar (criar objeto)
const Bicicleta1: Bicicleta = new Bicicleta('CALOI',26,'Vermelho');
const Bicicleta2: Bicicleta = new Bicicleta('SENSE',29,'Preta');

console.log(Bicicleta1.frear());
console.log(Bicicleta2.pedalar());