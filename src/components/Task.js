import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Task = ({tarea, eliminarTarea, actualizarTarea}) => {

    const [prioridad, setPrioridad] = useState(tarea.prioridad);
    const [estado, setEstado] = useState(tarea.estado);

    let priorityColor = "";

    if (prioridad === "Baja" ) {
        priorityColor = "green";
    } else if (prioridad === "Media") {
        priorityColor = "blue";
    } else if (prioridad === "Alta" ) {
        priorityColor = "red";
    }
    
    let stateColor = "";
    if (estado === "Nuevo") {
        stateColor = "green";
    } else if (estado === "En proceso") {
        stateColor = "blue";
    } else if (estado === "Finalizado") {
        stateColor = "red";
    }

    const actualizarPrioridad = () => {
        switch (prioridad) {
            case "Baja":
                setPrioridad("Media");
                actualizarTarea(tarea.id, { prioridad: "Media" });
                break;
            case "Media":
                setPrioridad("Alta");
                actualizarTarea(tarea.id, { prioridad: "Alta" });
                break;
            case "Alta":
                setPrioridad("Baja");
                actualizarTarea(tarea.id, { prioridad: "Baja" });
                break;
            default:
        }
    }
    

    const actualizarEstado = () => {
    switch (estado) {
        case "Nuevo":
            setEstado("En proceso");
            actualizarTarea(tarea.id, { estado: "En proceso" });
            break;
        case "En proceso":
            setEstado("Finalizado");
            actualizarTarea(tarea.id, { estado: "Finalizado" });
            break;
        case "Finalizado":
            setEstado("Nuevo");
            actualizarTarea(tarea.id, { estado: "Nuevo" });
            break;
        default:
    }
}


    return (
        <div className="task">
            <div className="task__options__container">
                <p>Prioridad: <span className="priority__span" style={{ background: priorityColor }} onClick={actualizarPrioridad}>{prioridad}</span></p>
                <p>Estado: <span className="priority__span" style={{ background: stateColor }} onClick={actualizarEstado}>{estado}</span></p>
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
