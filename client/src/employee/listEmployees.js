import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:3001/employees';

const CompListEmployees = () => {
    const [employees, setEmployees] = useState([]);
    
    // Mostrar todos los empleados.
    const getAllEmployees = async () => {
        const response = await axios.get(URI);
        setEmployees(response.data);
    }

    // Eliminar un empleado.
    const deleteEmployee = async (id) => {
        await axios.delete(`${ URI }/${ id }`);
        getAllEmployees();
    }

    useEffect(() => {
        getAllEmployees();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={ `/crear` } className='mt-2 mb-2 btn btn-primary'>Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>País</th>
                                <th>Cargo</th>
                                <th>Tiempo en el cargo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { employees.map((employee) => (
                                <tr key={ employee.id }>
                                    <td>{ employee.name }</td>
                                    <td>{ employee.age }</td>
                                    <td>{ employee.country }</td>
                                    <td>{ employee.position }</td>
                                    <td>{ employee.timePosition }</td>
                                    <td>
                                        <Link to={ `/editar/${ employee.id }` } className='btn btn-info'>Editar</Link>|
                                        <button onClick={ () => deleteEmployee(employee.id) } className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CompListEmployees;
