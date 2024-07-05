import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Items from './pages/Items.jsx';
import Members from './pages/Members.jsx';
import Orders from './pages/Orders.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/members" element={<Members />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}
export default App;
