import s from "./App.module.css"
import { NavBar } from "./Components/NavBar/NavBar"
import { Home } from "./Components/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className={s.box}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
