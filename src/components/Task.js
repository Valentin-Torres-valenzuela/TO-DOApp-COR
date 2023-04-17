import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Task = ({tarea, eliminarTarea, actualizarTarea}) => {

    const [prioridad, setPrioridad] = useState(tarea.prioridad);
    const [estado, setEstado] = useState(tarea.estado);

    const priorityColorMap = {
        "Baja": "green",
        "Media": "blue",
        "Alta": "red"
    };
    
    const stateColorMap = {
        "Nuevo": "green",
        "En proceso": "blue",
        "Finalizado": "red"
    };
    
    const priorityColor = priorityColorMap[prioridad];
    const stateColor = stateColorMap[estado];
    
    const priorityUpdateMap = {
        "Baja": { newPriority: "Media" },
        "Media": { newPriority: "Alta" },
        "Alta": { newPriority: "Baja" }
    };
    
    const stateUpdateMap = {
        "Nuevo": { newState: "En proceso" },
        "En proceso": { newState: "Finalizado" },
        "Finalizado": { newState: "Nuevo" }
    };
    
    const updatePriority = () => {
        const { newPriority } = priorityUpdateMap[prioridad];
        setPrioridad(newPriority);
        actualizarTarea(tarea.id, { prioridad: newPriority });
    };
    
    const updateState = () => {
        const { newState } = stateUpdateMap[estado];
        setEstado(newState);
        actualizarTarea(tarea.id, { estado: newState });
    };
    


    return (
        <div className="task">
            <div className="task__options__container">
                <p>Prioridad: <span className="priority__span" style={{ background: priorityColor }} onClick={updatePriority}>{prioridad}</span></p>
                <p>Estado: <span className="priority__span" style={{ background: stateColor }} onClick={updateState}>{estado}</span></p>
            </div>
            <div className="task__title">
                <p>Titulo: <h3>{tarea.titulo}</h3></p>
            </div>
            <div className="task__description">
                <p>Descripción: <span>{tarea.descripcion}</span></p>
            </div>

            <div className='btn__container'>
                <button
                    className="btn__delete u-full-width"
                    onClick={() => eliminarTarea(tarea.id)}
                >
                    Eliminar &times;
                </button>
            </div>
        </div>
    )
};

Task.propTypes = {
    tarea: PropTypes.object.isRequired,
    eliminarTarea: PropTypes.func.isRequired
}

export default Task;
