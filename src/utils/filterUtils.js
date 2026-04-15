
export const filterCatalog = (list, searchTerm) => {
  if (!searchTerm) return list;
  return list.filter((item) =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
};