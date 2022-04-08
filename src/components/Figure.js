import React from 'react'

/* Para la construcción de este apartado consultamos librerias que explican la creación de figuras en etiquetas svg
     Innfo investigada en : https://learntutorials.net/es/svg/topic/3034/linea y https://www.mclibre.org/consultar/htmlcss/html/svg-formas-1.html#svg-etiqueta-line
  */

//Se pasan las variables de estado a los componentes mediante sus props ({props}) 
const Figure = ({ wrongLetters }) => {
  //Se crea una variable para saber el tamaño del arreglo de las palabras incorrectas
  const errors = wrongLetters.length

  return (
    <svg height="250" width="200" className="figure-container">

    {/* Creación del camino con lineas en svg  */}

      {/* 
        La etiqueta <line /> dibuja una línea

        Los atributos de esta etiqueta son 

        x1= Posición horizontal de inicio de línea.
        y1= Posición vertical de inicio de línea.
        x2= Posición horizontal de final de línea.
        y2= Posición vertical de final de línea.

       Innfo investigada en : https://learntutorials.net/es/svg/topic/3034/linea y https://www.mclibre.org/consultar/htmlcss/html/svg-formas-1.html#svg-etiqueta-line
      */}

      {/*Creación de las 4 lineas de la maquina de ahorcado*/}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />


      {/* La etiqueta circle crea un circulo 
        Los atributos cx y cy definen las coordenadas X y Y del centro del círculo. 
        Si se omiten cx y cy, el centro del círculo se fija en (0,0)
        El atributo r define el radio del círculo*/}

      {/* creación de la cabeza del ahorcado*/}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }


      {/* Creación del cuerpo del ahorcado  */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* Creación de los brazos del ahorcado  */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* Creación de las piernas del */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>
  )
}

export default Figure
