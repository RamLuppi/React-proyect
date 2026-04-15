import ItemCard from './ItemCard';

const CardGrid = ({ items }) => {
  return (
    <section className="card-grid">
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </section>
  );
};

export default CardGrid;

//imports

//component

//export