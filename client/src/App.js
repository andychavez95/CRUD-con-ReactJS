import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos el componente que muestra todos los empleados.
import CompListEmployees from './employee/listEmployees.js';
// Importamos el componente que crea un empleado.
import CompCreateEmployee from './employee/createEmployee.js';
// Importamos el componente que edita a un empleado.
import CompEditEmployee from './employee/editEmployee.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<CompListEmployees />} />
            <Route path='/crear' element={<CompCreateEmployee />} />
            <Route path='/editar/:id' element={<CompEditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
