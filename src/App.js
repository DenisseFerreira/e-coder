import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting={"saludos"}/>
    </div>
  );
}

export default App;
