import { Routes, Route } from "react-router-dom"
import Rent from './pages/Rent'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Rent />} />
        <Route path="/buy" element={<Rent />} />
        <Route path="/sell" element={<Rent />} />
      </Routes> 
    </div>
  );
}

export default App;
