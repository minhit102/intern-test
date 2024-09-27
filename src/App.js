import './App.css';
import ProductList from './Components/ProductList';
import StoreList from './Components/StoreList';
import { ContextProvider } from './Context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="container-App">
          <StoreList />
          <ProductList />
        </div>
      </div></ContextProvider>

  );
}

export default App;
