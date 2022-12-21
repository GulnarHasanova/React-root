import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <>
     <nav>
    <Link to={"about"}>About</Link>
    <Link to={"contacts"}>Contacts</Link>

     </nav>
     <div>Home</div>
    
    </>
  );
}

export default App;
