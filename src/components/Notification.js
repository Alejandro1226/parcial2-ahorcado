import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    //aqui se pone una especie de condicion que si showNotification viene en true, al nombre de la clase, le agregue la palabra 'show'
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Recuerda que esta letra ya la ingresaste</p>
    </div>
  )
}

export default Notification
