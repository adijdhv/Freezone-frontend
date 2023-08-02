import logo from './logo.svg';
import './App.css';
import PageRoutes from './routes/Routes';
//import PageRoutes from '../src/routes/NavbarRoutes'
import Navbar from '../src/Componentss/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">

       <PageRoutes />
        
      </header>
    </div>
  );
}

export default App;
