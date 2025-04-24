import './App.css';
import Contador from './componentes/Contador';
import NombreEnTiempoReal from './componentes/nombreEnTiempoReal';
import Texto from './componentes/texto';

// function App() {
//   return (
//     <div className="App" style={{ textAlign: 'center', padding: '2rem' }}>
//       <Texto />
//       {<Contador />}
//       {<NombreEnTiempoReal />}
//     </div>
//   );
// }


import AlertaEjemplo from './componentes/AlertaEjemplo';

function App() {
  return (
    <div className="App">
      <AlertaEjemplo />
      <hr />
      <Contador/>
      <hr />
      <Texto/>
      <hr />
      <NombreEnTiempoReal></NombreEnTiempoReal>
    </div>
  );
}


export default App;
