import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:3001/employees';

const CompEditEmployee = () => {
    // Campos de un empleado.
    const [name, setName] = useState('');
    const [age, setAge] = useState(18);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [timePosition, setTimePosition] = useState(0);

    // Navegar hacia otra ruta.
    const navigate = useNavigate();

    // Id de empleado.
    let {id} = useParams();

    // Retornar un empleado.
    const getEmployee = async (id) => {
        const response = await axios.get(`${ URI }/${ id }`)
        setName(response.data.name);
        setAge(response.data.age);
        setCountry(response.data.country);
        setPosition(response.data.position);
        setTimePosition(response.data.timePosition);
    }

    // Guardar un empleado.
    const updateEmployee = async (event) => {
        event.preventDefault();
        await axios.put(`${ URI }/${ id }`, {
            name,
            age,
            country,
            position,
            timePosition
        });
        navigate('/');
        console.log(name);
    }

    useEffect(() => {
        getEmployee(id);
    }, []);

    return (
        <div>
            <h1>Editar empleado:</h1>
            <p>{}</p>
            <form onSubmit={ updateEmployee }>
                <div className='mb-3'>
                    <label className='form-label'>Nombre:</label>
                    <input
                        type='text'
                        required
                        value={ name } 
                        onChange={ (event) => { setName(event.target.value); } }
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Edad:</label>
                    <input
                        type='number'
                        required
                        min='18' 
                        max='100'
                        value={ age } 
                        onChange={ (event) => { setAge(event.target.value); } }
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>País:</label>
                    <input
                        type='text'
                        required
                        value={ country } 
                        onChange={ (event) => { setCountry(event.target.value); } }
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cargo:</label>
                    <input
                        type='text'
                        required
                        value={ position } 
                        onChange={ (event) => { setPosition(event.target.value); } }
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Tiempo en el cargo:</label>
                    <input
                        type='number'
                        required
                        min='0'
                        value={ timePosition } 
                        onChange={ (event) => { setTimePosition(event.target.value); } }
                        className='form-control'
                    />
                </div>
                <input
                    type='submit'
                    value='Guardar'
                    className='btn btn-primary'
                />
            </form>
        </div>
    );
}

export default CompEditEmployee;
