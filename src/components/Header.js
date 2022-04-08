import React from 'react'

// rafce

/*En la versión de recat que estamos trabajando los componenetes se pueden crear con metodos, por eso en este caso se crean metodos con 
el arrow function
*/

/*Algo curioso que ocurre en react es que en cada metodo de cada archivo de js, el returno solo pude devolver una etiqueta, no pueden 
haber dos etiquetas independientes como parte de un return, por eso siempre se crea una etiqueta general y ahi se ponene las otras etiquetas*/  

const Header = () => {


  return (
    <>
    {/* Se crean dos etiquetas de texto */}
      <h1>El ahorcado de Alejandro y Javier </h1>
      <p>Adivina la palabra para no ser ahorcado</p>
    </>
  )
}

export default Header
