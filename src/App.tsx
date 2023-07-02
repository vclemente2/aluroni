import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cardapio } from "./pages/Cardapio";
import { Inicio } from "./pages/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}

export default App;
