// Importa la utilidad PropTypes desde la biblioteca prop-types
import PropTypes from "prop-types";

// Define el componente Buscador con desestructuración de props
const Buscador = ({ search, setSearch, sortOrder, setSortOrder }) => {
  // Función para manejar el cambio de orden
  const handleSort = () => {
    // Cambia el orden al contrario del estado actual
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Retorna la estructura del componente
  return (
    <div className='input-group mb-3'>
      {/* Input para búsqueda */}
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='form-control'
        placeholder='Search Spell...'
      />
      {/* Botón para ordenar */}
      <button
        className='btn btn-warning text-dark'
        type='button'
        onClick={handleSort}
      >
        {/* Texto del botón que indica el orden actual */}
        Order by {sortOrder === "asc" ? "descendent" : "ascendent"}
      </button>
    </div>
  );
};

// PropType para validar las props del componente Buscador
Buscador.propTypes = {
  search: PropTypes.string.isRequired, // Propiedad de búsqueda como cadena obligatoria
  setSearch: PropTypes.func.isRequired, // Función para establecer la búsqueda como obligatoria
  sortOrder: PropTypes.oneOf(["asc", "desc"]).isRequired, // Orden como una de dos cadenas obligatorias: "asc" o "desc"
  setSortOrder: PropTypes.func.isRequired, // Función para establecer el orden como obligatoria
};

// Exporta el componente Buscador como predeterminado
export default Buscador;
