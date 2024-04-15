import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Buscador from "../Buscador/Buscador";

const MiApi = () => {
  // Define el componente funcional MiApi
  const [spells, setSpells] = useState([]); // Define el estado para almacenar los hechizos
  const [search, setSearch] = useState(""); // Define el estado para almacenar el término de búsqueda
  const [sortOrder, setSortOrder] = useState("asc"); // Define el estado para almacenar el orden de clasificación
  const [selectedCategory, setSelectedCategory] = useState(""); // Define el estado para almacenar la categoría seleccionada

  const getInfo = async () => {
    // Define una función asincrónica getInfo para obtener los datos de los hechizos
    try {
      // Intenta realizar la solicitud
      let info = await fetch("https://hp-api.onrender.com/api/spells"); // Realiza una solicitud GET a la API de hechizos
      let result = await info.json(); // Convierte la respuesta en formato JSON
      setSpells(result); // Actualiza el estado con los hechizos obtenidos
    } catch (error) {
      // Maneja errores en caso de que la solicitud falle
      Swal.fire({
        // Muestra una alerta utilizando SweetAlert2
        title: "Error!",
        text: "Upsss comuníquese con el administrador",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  useEffect(() => {
    // Define un efecto que se ejecuta después de que el componente se monta
    getInfo(); // Llama a la función getInfo para obtener los datos de los hechizos
  }, []); // El efecto se ejecuta solo una vez, después del montaje inicial del componente

  const filterSpells = () => {
    // Filtrar hechizos basados en la búsqueda y categoría seleccionada
    let filteredSpells = spells.filter((spell) =>
      spell.name.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategory !== "") {
      filteredSpells = filteredSpells.filter((spell) =>
        spellsByCategory[selectedCategory].includes(spell.name)
      );
    }

    return filteredSpells;
  };

  const sortSpells = () => {
    const filteredSpells = filterSpells(); // Filtra los hechizos una vez y almacena el resultado
    const sortedSpells = [...filteredSpells].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    return sortedSpells;
  };

  const spellsByCategory = {
    // Define un objeto que mapea categorías a listas de hechizos
    Beginner:
      // Define la categoría "Principiante" con una lista de hechizos
      [
        "Aberto",
        "Accio",
        "Aguamenti",
        "Alohomora",
        "Anapneo",
        "Aparecium",
        "Apparate",
        "Ascendio",
        "Avis",
        "Bombardo",
        "Capacious Extremis",
        "Confundo",
        "Crinus Muto",
        "Diffindo",
        "Disillusionment Charm",
        "Engorgio",
        "Episkey",
        "Erecto",
        "Evanesco",
        "Expelliarmus",
        "Ferula",
        "Finite Incantatem",
        "Furnunculus Curse",
        "Geminio",
        "Glisseo",
        "Homenum Revelio",
        "Homonculus Charm",
        "Immobulus",
        "Impedimenta",
        "Impervius",
        "Incendio",
        "Incarcerous",
        "Langlock",
        "Legilimens",
        "Levicorpus",
        "Locomotor Mortis",
        "Lumos",
        "Morsmordre",
        "Mucus Ad Nauseam",
        "Muffliato",
        "Nox",
        "Obliviate",
        "Obscuro",
        "Oculus Reparo",
        "Oppugno",
        "Periculum",
        "Petrificus Totalus",
        "Protean Charm",
        "Protego",
        "Reducio",
        "Reparo",
        "Reparifors",
        "Rictusempra",
        "Riddikulus",
        "Scourgify",
        "Silencio",
        "Sonorus",
        "Spongify",
        "Stupefy",
        "Tarantallegra",
        "Wingardium Leviosa",
      ],
    Intermediate:
      // Define la categoría "Intermedio" con una lista de hechizos
      [
        "Disapparate",
        "Expecto patronum",
        "Renneverate",
        "Bat",
        "Brackium Emendo",
        "Fidelius Charm",
        "Reducto",
        "Unbreakable Vow",
      ],
    Advanced:
      // Define la categoría "Avanzado" con una lista de hechizos
      [
        "Fiendfyre Curse",
        "Sectumsempra",
        "Serpensortia",
        "Conjunctivitis Curse",
        "Piertotum Locomotor",
      ],
    Forbidden:
      // Define la categoría "Prohibido" con una lista de hechizos
      ["Avada Kedavra", "Crucio", "Imperio"],
  };

  const getCategoryBadge = (category) => {
    // Define una función para obtener el badge de categoría
    let badgeClass = ""; // Inicializa una cadena para la clase del badge
    switch (category) {
      // Evalúa la categoría y asigna una clase de badge correspondiente
      case "Beginner":
        badgeClass = "badge bg-success"; // Clase para la categoría "Principiantes"
        break;
      case "Intermediate":
        badgeClass = "badge bg-warning"; // Clase para la categoría "Intermedios"
        break;
      case "Advanced":
        badgeClass = "badge bg-primary"; // Clase para la categoría "Avanzados"
        break;
      case "Forbidden":
        badgeClass = "badge bg-danger"; // Clase para la categoría "Prohibidos"
        break;
      default:
        badgeClass = "badge bg-primary"; // Clase predeterminada
        break;
    }
    return <span className={badgeClass}>{category}</span>; // Retorna el elemento span con la clase del badge
  };

  return (
    <div className='container mt-4'>
      {/* Contenedor principal del componente */}
      <Buscador
        // Componente Buscador para buscar y ordenar los hechizos
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div className='row'>
        {/* Fila para la selección de categoría */}
        <div className='col-md-6'>
          {/* Columna con el formulario de selección de categoría */}
          <div className='mb-3'>
            {/* Div contenedor del formulario */}
            <label
              htmlFor='categorySelect'
              className='form-label text-white fs-5'
            >
              Select Category:
            </label>
            {/* Etiqueta del formulario */}
            <select
              id='categorySelect'
              className='form-select'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {/* Agrega una opción para seleccionar todas las categorías */}
              <option value=''>All</option> {/* Cambiado a cadena vacía */}
              {/* Mapea las categorías y crea opciones para cada una */}
              {Object.keys(spellsByCategory).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* Fin del formulario de selección de categoría */}
          </div>
          {/* Fin de la columna del formulario */}
        </div>
        {/* Fin de la fila de selección de categoría */}
      </div>
      {/* Fin del contenedor de la fila de selección de categoría */}
      {sortSpells().length > 0 ? (
        <div className='table-responsive'>
          {/* Si hay hechizos, muestra una tabla */}
          <table className='table table-bordered table-striped mt-3'>
            {/* Crea una tabla */}
            <thead className='table-light'>
              {/* Cabecera de la tabla */}
              <tr>
                {/* Fila de encabezado */}
                <th scope='col'>ID</th>
                {/* Celda de ID */}
                <th scope='col' style={{ width: "13%" }}>
                  Name
                </th>
                {/* Celda de Nombre */}
                <th scope='col'>Description</th>
                {/* Celda de Descripción */}
                <th scope='col'>Category</th>
                {/* Celda de Categoría */}
              </tr>
              {/* Fin de la fila de encabezado */}
            </thead>
            {/* Fin de la cabecera de la tabla */}
            <tbody>
              {/* Cuerpo de la tabla */}
              {sortSpells().map((spell, index) => (
                // Mapea los hechizos ordenados
                <tr key={index}>
                  {/* Define una fila para cada hechizo */}
                  <th scope='row'>{index + 1}</th>
                  {/* Celda de ID */}
                  <td className='text-center'>{spell.name}</td>
                  {/* Celda de Nombre */}
                  <td>{spell.description}</td>
                  {/* Celda de Descripción */}
                  <td>
                    {/* Celda de Categoría */}
                    {Object.entries(spellsByCategory).map(
                      ([category, spellList]) =>
                        spellList.includes(spell.name) ? (
                          <span
                            key={category}
                            className='badge badge-pill me-1'
                            style={{ fontSize: "0.8rem" }}
                          >
                            {/* Mapea las categorías de hechizos */}
                            {getCategoryBadge(category)}
                            {/* Obtiene el badge de categoría */}
                          </span>
                        ) : null
                    )}
                    {/* Fin del mapeo de categorías */}
                  </td>
                  {/* Fin de la celda de Categoría */}
                </tr>
                // Fin de la fila de hechizo
              ))}
              {/* Fin del mapeo de hechizos */}
            </tbody>
            {/* Fin del cuerpo de la tabla */}
          </table>
          {/* Fin de la tabla */}
        </div>
      ) : (
        // Fin de la tabla de hechizos
        <div className='alert alert-info mt-3' role='alert'>
          {/* Si no hay hechizos, muestra una alerta */}
          No spells found.
          {/* Mensaje de alerta */}
        </div>
        // Fin de la alerta
      )}
      {/* Fin del contenedor principal */}
    </div>
    // Fin del componente MiApi
  );
};

export default MiApi;
// Exporta el componente MiApi
