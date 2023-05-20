
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import feeCodeCampLogo from './imagenes/fcc_primary_large.png';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
        src={feeCodeCampLogo} 
        alt="Logo freecodecamp" 
        className='freecodecamp-logo' 
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
      
    </div>
  );
}

export default App;
