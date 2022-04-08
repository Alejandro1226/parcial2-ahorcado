import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

// Se creaun arreglo que va a contener las palabras que el usuario debe adivinar 
const words = ['alejandro', 'javier', 'felipe', 'juan'];
// Se crea una varaible que contiene un metodo que selecciona una de las palabras del arreglo de la linea anterior 
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  //Se crean las variables que van a cambiar su estado durante el uso de la aplicación 
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  //Entender arrow function 
  //Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

  //Diferencias y limitaciones:

  //No tiene sus propios enlaces a this o super y no se debe usar como métodos.
  //No tiene argumentos o palabras clave new.target.
  //No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
  //No se puede utilizar como constructor.
  


  //El hook useEffect podremos ejecutar código cada vez que nuestro componente se renderice (ya sea por una actualización o sea la primera vez)
  //lo que hacemos es decirle a React que nuestro componente debe llevar acabo algo después de renderizase,.
  useEffect(() => {

    //El evento onKeyDown se define para que suceda cuando el usuario pulsa una tecla

    // Creamos una función evento, que reacciona o genera un cambio cuando el usuario presiona una tecla 
    const handleKeydown = event => {
      
      //son paraemtros para poder saber que tecla se presiono y cual es su codigo, son los parametros para el evento
      const { key, keyCode } = event;

      //condicional para asaber si la variable playable ( o sea poder jugar ) viene con un valor de true 
      // y que si la tecla que selecciono es una letra, por eso los keycode van de 65 a 90 (son los keycodes de las letras en un teclado)
      if (playable && keyCode >= 65 && keyCode <= 90) {
        
        //letter es una variable que almacena el resultado de key.toLowerCase
        // Este  metodo se encarga de convertir el valor de una cadena en letras minúsculas, en este caso que la letra de
        // la tecla que presionemos la convierta en miniscula
        const letter = key.toLowerCase();

        //condicional para saber si la tecla que presionamos, es una letra de la palabra que debemos adivinar
        if (selectedWord.includes(letter)) {

          //CorrectLetter es un arreglo para las letras correctas definido arriba 

          // condicional para saber si la letra que escogió el usuario no esta en las letras correctas que ha dicho
          if (!correctLetters.includes(letter)) {

            // con el setCorrectLetter agregamos a la letras correctas la letra actual (currentLetters -- nombre de la función)
            // creamos un nuevo arreglo y a ese arreglo le asignamos la variable letter 
            // Al anteponer los tres puntos que representan al spread operator transformamos es como si transformamos el arreglo 
            // en una lista de argumentos, y es por ello que podemos acceder a sus valores. como si le quitáramos los corchetes ( “[]” ) al array.
            // Luego se le agrega el valor de letter

            setCorrectLetters(currentLetters => [...currentLetters, letter]);

            //En caso de que la letra de la tecla que presionó el usuario ya la haya presionado, que salte la notificación de que ya la presiono
          } else {
            show(setShowNotification);
          }
        } else {

          //Condicional para saber si la letra de la tecla que presionó el usuario no esta dentro de la palabra a adivinar
          if (!wrongLetters.includes(letter)) {

            // con el setWtongLetter agregamos a la letras correctas la letra actual (currentLetters -- nombre de la función)
            // creamos un nuevo arreglo y a ese arreglo le asignamos la variable letter 
            // Al anteponer los tres puntos que representan al spread operator transformamos es como si transformamos el arreglo 
            // en una lista de argumentos, y es por ello que podemos acceder a sus valores. como si le quitáramos los corchetes ( “[]” ) al array.
            // Luego se le agrega el valor de letter
            setWrongLetters(currentLetters2 => [...currentLetters2, letter]);
          } else {

            //En caso de que la letra de la tecla que presionó el usuario ya la haya presionado, que salte la notificación
            show(setShowNotification);
          }
        }
      }
    }

    // Se llama al evento que creamos al principio 
    // target.addEventListener('tipo de evento',función_a_lanzar);
    // Recordemos que el key down hace referencia a que el usuario presiono una tecla

    window.addEventListener('keydown', handleKeydown);
    
    // Cada que se ejecute el useEffect en el app se crearia un evento, es decir tendriamos varios eventos 
    // Para evitar que se generen varios eventos lo que hacemos es un clean up - borrar el evento para que solo tengamos funcionando un unico evento
    return () => window.removeEventListener('keydown', handleKeydown);
   
    
    //Cada que estos arreglos sean actualizados es que vamos a llamar esta función de useEffect
  }, [correctLetters, wrongLetters, playable]);

  // función que se llama la presionar el botón de jugar otra vez 
  function playAgain() {
    setPlayable(true);

    // vacia los arreglos 
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>

      {/* En cada uno de los componentes se pasan las variables, bien sean las que cambia de estado o las constantes, como parte de sus atributos */}
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}
// el export default se utiliza para exportar una función de un módulo. 
// Normalmente, la exportación por defecto se escribe después de la función. 
export default App;