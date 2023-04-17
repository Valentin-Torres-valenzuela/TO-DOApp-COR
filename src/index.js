import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import CorTestApp from './CorTestApp';
import { TareasContext } from './context/TareasContext';

function Index() {
    const [tareas, guardarTareas] = useState(
        JSON.parse(localStorage.getItem('tareas')) || []
    );

    const [filterTasks, setFilterTasks] = useState(tareas);

    const crearTarea = tarea => {
        const nuevasTareas = [...filterTasks, tarea];
        localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
        guardarTareas(nuevasTareas);
        setFilterTasks(nuevasTareas);
    }

    const eliminarTarea = id => {
        const nuevasTareas = filterTasks.filter(tarea => tarea.id !== id);
        localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
        guardarTareas(nuevasTareas);
    }

    const actualizarTarea = (id, nuevaTarea) => {
        console.log(nuevaTarea)
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    ...nuevaTarea,
                };
            }
            return tarea;
            });

        localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
        guardarTareas(nuevasTareas);
    };

    return (
        <TareasContext.Provider value={{ tareas, guardarTareas, filterTasks, setFilterTasks, crearTarea, eliminarTarea, actualizarTarea }}>
            <CorTestApp />
        </TareasContext.Provider>
    );
    }

ReactDOM.render(<Index />, document.getElementById('root'));
