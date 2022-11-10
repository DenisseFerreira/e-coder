import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting={"Saludos desde ItemList"}/>
    </div>
  );
}

export default App;
