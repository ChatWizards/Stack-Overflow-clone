import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
