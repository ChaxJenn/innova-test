import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import CalendarPages from "./pages/CalendarPages";

function App () {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2 bg-dark p-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 col-lg-10 p-4 bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/calendario" element={<CalendarPages />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App