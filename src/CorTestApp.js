import React, {useState, useContext} from "react";
import Task from "./components/Task";
import Formulario from "./components/FormTask";
import Filter from "./components/Filter";
import { TareasContext } from "./context/TareasContext";

function App() {

    const { tareas, guardarTareas, filterTasks, crearTarea, eliminarTarea, actualizarTarea } = useContext(TareasContext);

    const titulo = filterTasks.length === 0 ? 'No tienes tareas' : 'Administra tus tareas'

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                    <Formulario
                        crearTarea = {crearTarea}
                    />
                    </div>

                    <Filter
                        tareas={tareas}
                    />
                    
                    <div className="one-half column">
                        <h2 className="principal__title">{titulo}</h2>
                        
                        {Array.isArray(filterTasks) && filterTasks.map((tarea) => (
                            <Task
                                key={tarea.id}
                                tarea={tarea}
                                eliminarTarea={eliminarTarea}
                                guardarTareas={guardarTareas}
                                actualizarTarea={actualizarTarea}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
