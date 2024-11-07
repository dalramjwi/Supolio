import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main.tsx";
import Info from "./pages/Info.tsx";
import Face from "./pages/Face.tsx";
import Project from "./pages/Project.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Face />} />
        <Route path="/main" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
