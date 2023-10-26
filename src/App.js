import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/menu", element: <Menu /> },
  { path: "/booking", element: <Booking /> },
  { path: "/login", element: <Login /> },
  { path: "/confirmed", element: <ConfirmedBooking/> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/**
-- React maamoul deja bsh yaawnek aala reusability donc ma testha9ech fi kol page taamel call lel nav w footer khaterhom nafshom bsh yetaawdou donc fel main hne tji  t entouri el routes mteek lkol ( route = page = link) bel nav w footer mteek 
-- React router dom howa library ykhalik taamel routing, navigation bin les pages 
*/
