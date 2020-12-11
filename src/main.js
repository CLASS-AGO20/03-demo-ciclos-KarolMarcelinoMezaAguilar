export default class App {

    // Función que determine la suma de los pares entre 1 y 20 (for)

    sumarParesFor(){

        let suma = 0;

        for(let i=1; i<=20; i=i+1){
            if(i%2===0){
                suma = suma + i;
            }
        }

        return suma;

    }

    // Función que determine cuantos números impares hay en un intervalo (for)

    contarImparesFor(inicio, fin){

        let impares = 0;

        for(let i=inicio; i<=fin; i++){
            if(i%2 !== 0){
                impares++;
            }
        }

        return impares;

    }
    
    // Función que  (while)

    sumarParesWhile(){

        let i = 1;
        let suma = 0;

        while(i <= 20){

            if(i%2===0){
                suma = suma + i;
            }
            
            i = i + 1;

        }

        return suma;

    }

    // Función que  (while)

    A

    // Función que (do while)

    A

    // Función que (do while)

    A

}

let app = new App();

// F1
console.log(app.sumarParesFor());

// F2
console.log(app.contarImparesFor(5, 10));
console.log(app.contarImparesFor(5, 11));

// F3
console.log(app.sumarParesWhile());

// F4


// F5


// F6

