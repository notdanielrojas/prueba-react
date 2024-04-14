// Importa la imagen del logo desde la ruta relativa
import logo from "../../img/logo.png";

// Define el componente LandingPage
const LandingPage = () => {
  // Retorna la estructura del componente
  return (
    <div className='d-flex flex-column align-items-center justify-content-center text-center py-5'>
      {/* Imagen del logo con ruta dinámica */}
      <img
        src={logo}
        alt='Ministry of Magic Logo' // Texto alternativo para accesibilidad
        className='mb-4' // Clase CSS para margen inferior
        style={{ maxWidth: "200px" }} // Estilo en línea para máximo ancho
      />
      {/* Título principal */}
      <h1
        className='display-4 mb-4' // Clase CSS para tamaño y margen inferior
        style={{
          color: "#fff", // Color de texto
          fontFamily: "Arial, sans-serif", // Fuente de texto
          fontWeight: "bold", // Peso de la fuente
        }}
      >
        Ministry of Magic Spell Archive {/* Texto del título */}
      </h1>
      {/* Párrafo de introducción */}
      <p
        className='lead mb-5' // Clase CSS para tamaño y margen inferior
        style={{ color: "#fff", fontFamily: "Arial, sans-serif" }} // Estilo en línea para color de texto y fuente
      >
        Discover a comprehensive collection of spells documented throughout
        history, curated within our Ministry-endorsed spell archive.{" "}
        {/* Texto del párrafo */}
      </p>
    </div>
  );
};

// Exporta el componente LandingPage como predeterminado
export default LandingPage;
