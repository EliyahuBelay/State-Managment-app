import './App.css';
import Home from './Components/Home.components';
// import Massege from './Components/Massege.component';
import MassegeProvider from './Context/MassegeContex';

function App() {
  return (
    <div className="App">
      <MassegeProvider>
        {/* <Massege /> */}
        <Home></Home>
      </MassegeProvider>
    </div>
  );
}

export default App;
