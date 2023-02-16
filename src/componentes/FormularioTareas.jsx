import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { va as uuidv4 } from 'uuid'

const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState('');

  const handleInput = (e) => {
    cambiarInputTarea(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: inputTarea,
        completada: false
      }
    ]);
  }

  return (
    <form onSubmit={handleSubmit} action="" className='formulario-tareas'>
      <input
        placeholder='Escribe una tarea'
        type="text"
        className='formulario-tareas__input'
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button
        type='submit'
        className='formulario-tareas__btn'
      >
        <FontAwesomeIcon
          className='formulario-tareas__icono-btn'
          icon={faSquarePlus}
        />
      </button>
    </form>
  )
}

export default FormularioTareas