import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import { TareasContext } from '../context/TareasContext';

const Formulario = ({crearTarea}) => {

    const { setSelectedPrioridad, setSelectedEstado } = useContext(TareasContext);

    const [tarea, setTarea] = useState({
        titulo: '',
        prioridad: '',
        estado: '',
        descripcion: ''
    });

    const [error, setError] = useState(false);

    const actualizarState = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value 
        })
    }
    
    const {titulo, descripcion, prioridad, estado} = tarea;
    
    const submitTarea = (e) => {
        e.preventDefault();
        
        if (titulo.trim() === '' || descripcion.trim() === '' || prioridad.trim() === '' || estado.trim() === '') {
            setError(true);
            return;
        }
        
        setError(false);

        tarea.id = Date.now();
        
        setSelectedPrioridad('');
        setSelectedEstado('');
        
        crearTarea(tarea);

        setTarea({
            titulo: '',
            prioridad: '',
            estado: '',
            descripcion: ''
        })

    }
    
    return (
    <>
        <h2 className='form__title'>Crear tarea</h2>

    {
        error 
        ? 
            <p 
                className="error__alert animate__animated animate__bounceInLeft" 
                style={{ position: 'absolute', visibility:  error ? 'visible' : 'hidden' }}
            >
                Todos los campos son obligatorios
            </p> 
        : 
            null
    }
        
        <form
            onSubmit = {submitTarea}
        >
            <div className='form__container'>

                <input
                    type = "text"
                    name = "titulo"
                    className = "title__input"
                    placeholder = "Titulo"
                    onChange = {actualizarState}
                    value = {titulo}
                />

                <div className='selectors__container'>
                    <div className='selector__container'>
                        <label>Prioridad</label>
                        <select
                            className="selector"
                            label="Selecciona una opción"
                            name="prioridad"
                            value={prioridad}
                            onChange={actualizarState}
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
                            label="Selecciona una opción"
                            name="estado"
                            value={estado}
                            onChange={actualizarState}
                        >
                            <option value="">Seleccionar</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>
                    </div>
                </div>

                <textarea
                    className = "u-full-width"
                    name = "descripcion"
                    onChange = {actualizarState}
                    value = {descripcion}
                    placeholder='Descripción de la tarea'
                ></textarea>

                <button
                    type = "submit"
                    className = "u-full-width create__task__btn"
                    onChange = {actualizarState}
                >
                    Crear Tarea
                </button>
            </div>
        </form>

    </>
    );
}

Formulario.propTypes = {
    crearTarea: PropTypes.func
}

export default Formulario;