import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TareasContext } from '../context/TareasContext';

const Filter = () => {

    const { tareas, setFilterTasks, filterTasks} = useContext(TareasContext);

    const [selectedPrioridad, setSelectedPrioridad] = useState('');
    const [selectedEstado, setSelectedEstado] = useState('');

    if (selectedPrioridad === '' && selectedEstado === '') {
        setFilterTasks(tareas);
    }

    return (
        <>
            <div className='filters__container'>
                <h2 className="filter__title">Filtrar por: </h2>
                <div className='selectors__container'>

                    <div className='selector__container'>
                        <label>Prioridad</label>
                        <select
                            className="selector"
                            onChange={(e) => {
                                const {value} = e.target
                                    setSelectedPrioridad(value);
                                    if (selectedEstado !== '') {
                                        const filteredTareas = tareas.filter((tarea) => tarea.prioridad === value && tarea.estado === selectedEstado);
                                        setFilterTasks(filteredTareas);
                                    } else {
                                        const filteredTareas = tareas.filter((tarea) => tarea.prioridad === value);
                                        setFilterTasks(filteredTareas);
                                    }
                                }}
                        >
                            <option value="">Seleccionar</option>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                    </div>

                    <div className='selector__container'>
                        <label>Estado</label>
                        <select
                            className="selector"
                            onChange={(e) => {
                                const {value} = e.target
                                setSelectedEstado(value);
                                if (selectedPrioridad !== '') {
                                    const filteredTareas = tareas.filter((tarea) => tarea.estado === value && tarea.prioridad === selectedPrioridad);
                                    setFilterTasks(filteredTareas);
                                } else {
                                    const filteredTareas = tareas.filter((tarea) => tarea.estado === value);
                                    setFilterTasks(filteredTareas);
                                }
                            }}
                        >
                            <option value="">Seleccionar</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    );
};

Filter.propTypes = {
    tareas: PropTypes.array.isRequired,
    estado: PropTypes.string.isRequired,
    prioridad: PropTypes.string.isRequired,
};

export default Filter;
