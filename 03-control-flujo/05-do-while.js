
let i = 2;
while (i < 2) { //se evalua primero
    if(i % 2 == 0){
        console.log('Numero par', i)
    }
    i++;
} 

do { //se evalua al final
    if(i % 2 == 0){
        console.log('Numero par', i)
    }
    i++;
} while (i < 2)