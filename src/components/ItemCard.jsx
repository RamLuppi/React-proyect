import { useState } from 'react';

const ItemCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Manejador de evento para el botón de favoritos
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Lógica de estilos dinámicos
  const cardClassName = `card ${item.destacado ? 'highlighted' : ''} ${isFavorite ? 'favorite' : ''}`;

  return (
    <div className={cardClassName}>
      <h3>{item.titulo}</h3>
      <p><strong>Categoría:</strong> {item.categoria}</p>
      <p><strong>Año:</strong> {item.anio}</p>
      
      <button onClick={handleToggleFavorite}>
        {isFavorite ? '❤️ Quitar de Favoritos' : '🤍 Añadir a Favoritos'}
      </button>
    </div>
  );
};

export default ItemCard;