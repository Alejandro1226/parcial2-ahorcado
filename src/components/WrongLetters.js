import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>

      {/* si la condición es true (que el tamaño del arreglo de letras malas > 0), el elemento justo después de && Sera el que proyecte. Si es false, React lo ignorará. */}
        {wrongLetters.length > 0 && 
          <p>Letras incorrectas</p>
        }
        
        {/* Mapea el arreglo de WrongLetters y va creando una etiqueta span con el valor de letter, para cada una de las iteraciones */}
        {/* con el .reduce lo que hacemos es que entre un span y adjunte una coma . Se saco de una pagina */}
        {wrongLetters.map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>

    </div>
  )
}

export default WrongLetters
