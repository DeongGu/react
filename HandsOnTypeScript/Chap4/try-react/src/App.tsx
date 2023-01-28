import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./home";
import AnotherScreen from "./AnotherScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/another" element={<AnotherScreen />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
