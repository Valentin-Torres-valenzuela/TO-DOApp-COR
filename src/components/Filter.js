import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TareasContext } from '../context/TareasContext';

const Filter = () => {

    const { tareas, setFilterTasks, selectedPrioridad, setSelectedPrioridad, selectedEstado, setSelectedEstado} = useContext(TareasContext);

    useEffect(() => {
        if (selectedPrioridad !== '' || selectedEstado !== '') {
            const filteredTareas = tareas.filter((tarea) => {
                if (selectedPrioridad !== '' && selectedEstado !== '') {
                    return tarea.prioridad === selectedPrioridad && tarea.estado === selectedEstado;
                } else if (selectedPrioridad !== '') {
                    return tarea.prioridad === selectedPrioridad;
                } else {
                    return tarea.estado === selectedEstado;
                }
            });
            setFilterTasks(filteredTareas);
        } else {
            setFilterTasks(tareas);
        }
    }, [selectedPrioridad, selectedEstado, tareas, setFilterTasks]);

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
                            }}
                            value={selectedPrioridad}
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
                            }}
                            value={selectedEstado}
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
