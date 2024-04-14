// Importa el componente LandingPage desde el archivo indicado
import LandingPage from "./assets/Components/LandingPage/LandingPage";
// Importa el componente MiApi desde el archivo indicado
import MiApi from "./assets/Components/MiApi/MiApi";
// Importa los estilos CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importa los estilos personalizados del archivo index.css
import "./index.css";

// Define la función del componente App
function App() {
  // Retorna la estructura del componente
  return (
    // Contenedor principal con margen superior
    <div className='container my-5'>
      {/* Tarjeta con sombra */}
      <div className='card shadow'>
        {/* Cuerpo de la tarjeta */}
        <div className='card-body'>
          {/* Renderiza el componente LandingPage */}
          <LandingPage />
          {/* Línea divisoria */}
          <hr className='my-4 text-white' />
          {/* Renderiza el componente MiApi */}
          <MiApi />
        </div>
      </div>
    </div>
  );
}

// Exporta el componente App como predeterminado
export default App;
