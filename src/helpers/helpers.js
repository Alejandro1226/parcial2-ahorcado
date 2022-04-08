// Esta función recibe un parametro setter y hace referencia al de mostrar la notificación 
// Lo que hace es que cuando setter sea true muestre una notificación y pasados dos segundos, convierta setter en false y desaparezca la notificación
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

//En esta función podemos corrabar si la persona gano o perdio 
// los parametros que necesita esta función son las palabras correctas, las incorrectas y la palabra
export function checkWin(correct, wrong, word) {

  //define una variable que contiene el valor 'win' como valor incial 
  let status = 'win';

  // saber si gano
  
  //recorre el arreglo hasta para cada una de las letras
  word.split('').forEach(letter => {

    //Si el arreglo de correctas no incluye a letter, pone el status en vacio porque quiere decir que no hemos ganado pero tampoco hemos perdido
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // saber si perdio 
  // si el tamaño del arreglo ya tiene mas de 6 argumentos, quiere decir que la ´persona perdio pq ya completo el muñequito
  if(wrong.length === 6) status = 'lose';

  return status
}