// Importamos el modelo.
import employees from "../models/employees.js";

// Métodos para el CRUD.

// Retornar todos los empleados.
export const getAllEmployees = async (req, res) => {
    try {
        const allEmployees = await employees.findAll();
        res.json(allEmployees);
    } catch (error) {
        res.json({message: error.message}) 
    }
}

// Retornar un empleado por id.
export const getEmploye = async (req, res) => {
    try {
        const employee = await employees.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(employee[0]);
    } catch (error) {
        res.json({message: error.message}) 
    }
}

// Crear un registro.
export const createEmployee = async (req, res) => {
    try {
        await employees.create(req.body);
        res.json({
            message: "Empleado creado correctamente." 
        }); 
    } catch (error) {
        res.json({message: error.message}) 
    }
}


// Actualizar un registro.
export const updateEmployee = async (req, res) => {
    try {
        await employees.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Empleado actualizado correctamente." 
        }); 
    } catch (error) {
        res.json({message: error.message}) 
    }
}

// Borrar un empleado.
export const deleteEmployee = async (req, res) => {
    try {
        const employee = await employees.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Empleado borrado correctamente." 
        }); 
    } catch (error) {
        res.json({message: error.message}) 
    }
}
