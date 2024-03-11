import express from 'express';
import { createEmployee, deleteEmployee, getAllEmployees, getEmploye, updateEmployee } from '../controllers/employees.js';
const router = express.Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmploye);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;