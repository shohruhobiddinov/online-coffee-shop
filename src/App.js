import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Locations from "./pages/locations/locations";
import Contact from "./pages/contact/contact";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/locations"} element={<Locations/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default App