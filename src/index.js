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

    return (
        <TareasContext.Provider value={{ tareas, guardarTareas, filterTasks, setFilterTasks }}>
            <CorTestApp />
        </TareasContext.Provider>
    );
    }

ReactDOM.render(<Index />, document.getElementById('root'));
