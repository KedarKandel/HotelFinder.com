import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelList from "./pages/hotelLists/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/hotels/:id" element={<HotelList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
