import { useState } from "react";
import Busqueda from "./Components/Busqueda.jsx";
import MiApi from "./Components/MiApi.jsx";

function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');
  return (
    <div className="App">
      <Busqueda setValorBusqueda={setValorBusqueda}></Busqueda>
      <MiApi valorBusqueda={valorBusqueda}></MiApi>
    </div>
  );
}

export default App;
