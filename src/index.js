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
    const [selectedPrioridad, setSelectedPrioridad] = useState('');
    const [selectedEstado, setSelectedEstado] = useState('');

    const crearTarea = tarea => {
        const nuevasTareas = [...filterTasks, tarea];
        localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
        guardarTareas(nuevasTareas);
        setFilterTasks(nuevasTareas);
        setSelectedPrioridad('');
        setSelectedEstado('');
    }

    const eliminarTarea = id => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
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
        <TareasContext.Provider value={{ tareas, guardarTareas, filterTasks, setFilterTasks, crearTarea, eliminarTarea, actualizarTarea, selectedPrioridad, setSelectedPrioridad, selectedEstado, setSelectedEstado }}>
            <CorTestApp />
        </TareasContext.Provider>
    );
    }

ReactDOM.render(<Index />, document.getElementById('root'));
