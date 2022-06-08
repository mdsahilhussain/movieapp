import logo from "./logo.svg";
import "./App.css";

import { Banner, Navbar, Movies } from "./component/index";
import Favourite from "./component/Favourite";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
      <Route path="/" element={<>
      <Banner/>
      <Movies/>
      </>}/>
      <Route path="/favourites" element={<Favourite />} />
      {/* <Banner /> */}
    </Routes>
  </BrowserRouter>
  );

}

export default App;
