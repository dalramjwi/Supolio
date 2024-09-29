import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/main.tsx";
import Info from "./pages/info.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Project from "./pages/project.tsx";

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen justify-between">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/project" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
