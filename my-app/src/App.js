 
import './App.css';
import Navbar from './Componentss/USER/navbar';
import UserRoutes from './routes/Routes';
   

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">

       <UserRoutes />
        
      </header>
    </div>
  );
}

export default App;
