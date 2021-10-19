import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const onAdd = (cantidad) => {
        alert(`Haz Agregado ${cantidad} de X al carrito`)
    }

  return (
    <div>
      <h1>{props.greeting}</h1>

      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  );
};
 
export default ItemListContainer;