import Body from "./pages/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vesting from "./pages/Vesting";

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Body/>}>
          </Route>
          <Route path="/vesting" element={<Vesting/>}>
            
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
