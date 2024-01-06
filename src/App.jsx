import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContacts from "./pages/AddContacts";
import AllContacts from "./pages/AllContacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contacts" element={<AddContacts />} />
        <Route path="/all-contacts" element={<AllContacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
