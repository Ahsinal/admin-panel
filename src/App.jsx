import Topbar from "./components/Topbar";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.css'
import Homepage from "./pages/Homepage";

function App() {
  return (
   <Router>
    <Topbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
