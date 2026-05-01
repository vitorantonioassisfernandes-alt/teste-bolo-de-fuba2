let lado1 = 3;
let lado2 = 5;
let lado3 = 9;
let soma = 0;
 soma = lado1 + lado2;

 console.log("lado 1 " + lado1);
 console.log("lado 2 " + lado2);
 console.log("lado 3 " + lado3);

    if((lado1 == lado2) && (lado1 == lado3)){
        console.log("triangulo equilatero");
    }else{
        if((lado1 != lado2) && (lado1 != lado3)){
            console.log("triangulo escaleno");
        }  else{
            console.log("triangulo ezociles");
        }
    }