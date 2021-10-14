import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="hola soy una prop" />
    </div>
  );
}

export default App;
