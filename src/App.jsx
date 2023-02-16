import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  // Obtenemos las tareas guardadas en el storage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  // Estableciendo el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  // Guardando estado dentro del localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])
  // Validar mostrarCompletadas del localstorage
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }
  // Estableciendo el estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  // Guardando el estado de mostrarCompletadas en el localstorage
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas])

  return (
    <div className='contenedor'>
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
      />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  )
}

export default App