import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Main from "./pages/main.tsx";
import Info from "./pages/info.tsx";
import Project from "./pages/project.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to="/main">main</Link>
            <Link to="/info">info</Link>
            <Link to="/project">project</Link>
          </div>
        </header>
        <body>
          <Routes>
            {/* 기본 경로에 접속했을 때 project 페이지로 리디렉션 */}
            <Route path="/" element={<Navigate to="/project" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
