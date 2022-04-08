import React from 'react';

//Se pasan las variables de estado a los componentes mediante sus props ({props}) 
const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">

      {/* el spli('') permite que la palabra seleccionada la convierta en un arreglo de caracteres  */}
      {/* con el  map() se puede recorrer ese nuevo arreglo, debe tener un elemento  y un iterador 
        

        El valor del elemento actual , en este caso letter.

        El índice del elemento actual, en este caso .

        */}
      {selectedWord.split('').map((letter, i) => {
        return (

          
          <span className="letter" key={i}>

            {/* Aqui lo que hacemos es verificar si la letra esta inlcuida en correctLetters
            si lo esta, en el span desplegaremos la variable letter y si no la desplegaremos y se dejara el span vacio con ''
            Esto es para la parte donde se ponen las letras correctas */}
            
            {/* condicion + operador ternario(?) + el valor que se asiganara al span en caso de que se cumpla + : el segundo valor en caso de no cumplir la condicion  */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word
