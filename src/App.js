import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./components/templates/main/Main.tsx";
import Info from "./components/templates/info/Info.tsx";
import Project from "./pages/Project.tsx";
import Home from "./components/templates/home/Home.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
