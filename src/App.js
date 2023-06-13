import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";


function App() {
  const basename = process.env.NODE_ENV === "production" ? "/vibes" : "";

  return (
    <div className="App">
      <Router basename={basename}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;