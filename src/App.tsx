import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { When, Where, Who, How } from "./pages";
import Landing from "./components/Landing";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/when" element={<When />} />
          <Route path="/where" element={<Where />} />
          <Route path="/who" element={<Who />} />
          <Route path="/how" element={<How />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
