import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

//Se pasan las variables de estado a los componentes mediante sus props ({props}) 
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  
  //Variables a utilizar
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // Si el metodo check win retorna el estado como 'win'
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    
    //mensaje de felicitaciones por adivinar la palabra 
    finalMessage = 'Felicidades! Ganaste! ';
    //pone la variable para saber si se esta jugando en falso
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    
    //mensaje de que siga intentando en una proxima oportunidad 
    finalMessage = 'Perdiste, pero no te rindas. ';

    //mensaje que muestra la palabra que tenia que adivinar el usuario 
    finalMessageRevealWord = `...la palabra era: ${selectedWord}`;
     //pone la variable para saber si se esta jugando en falso
    playable = false;
  }

  //otra función useEffect para cambiar el estado de playable en el main
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    //Se pregunta si el mensaje final viene con algun texto, es decir que paso por los ifs de arriba , 
    // para asignar en el style(atributo de css) la configuración de display:flex, 
    //en caso de que si venga vacio no se le asigna 
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        {/* la función onClick, en los atributos de este boton, llama al metodo del app.js y la ejecuta */}
        <button onClick={playAgain}>Jugar de nuevo</button>
      </div>
    </div>
  )
}

export default Popup
