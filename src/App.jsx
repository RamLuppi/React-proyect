import { useState } from 'react';
import { catalogo } from './data';
import { filterCatalog } from './utils/filterUtils';
import CustomHeader from './components/CustomHeader';
import CardGrid from './components/CardGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Manejador de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Lógica de filtrado fuera del return
  const filteredItems = filterCatalog(catalogo, searchTerm);

  return (
    <div className="app-container">
      <CustomHeader />
      
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por título..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <CardGrid items={filteredItems} />
      </main>

      <footer>
        <p>© 2026 - Catálogo React Project</p>
      </footer>
    </div>
  );
}

export default App;