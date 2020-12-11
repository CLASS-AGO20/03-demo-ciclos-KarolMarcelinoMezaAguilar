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
    
    // Función que sume los pares que hay entre 1 y 20 (while)

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

    // Función que determine cuantos números impares hay en un intervalo (while)

    contarImparesWhile(inicio, fin){

        let i = inicio;
        let impares = 0;

        while(i <= fin){
            if(i%2 !== 0){
                impares = impares++;
            }

            i = i++;

        }

        return impares;

    }

    // Función que sume los pares que hay entre 1 y 20 (do while)

    sumarParesDo(){

        let i = 1;
        let suma = 0;

        do{

            if(i%2 === 0){
                suma = suma + 1;
            }
            i++;

        }while(i <= 20)
    }

    // Función que determine cuantos números impares hay en un intervalo (do while)

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
console.log(app.contarImparesWhile(5, 10));
console.log(app.contarImparesWhile(5, 11));

// F5
console.log(app.sumarParesDo());

// F6

