import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main.tsx";
import Info from "./pages/Info.tsx";
import Header from "./components/Header.tsx";
// import Overview from "./pages/Overview.tsx";
// import Single from "./pages/Single.tsx";
import Face from "./pages/Face.tsx";
import Team from "./pages/Team.tsx";
import Project from "./pages/Project.tsx";

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col h-screen overflow-y-scroll scrollbar-hidden">
        <Header />
        <div className="flex-grow border border-black border-t-0">
          <Routes>
            <Route path="/" element={<Navigate to="/single" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/overview" element={<Project />} />
            <Route path="/single" element={<Face />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
