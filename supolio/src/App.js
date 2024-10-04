import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main.tsx";
import Info from "./pages/Info.tsx";
import Header from "./components/Header.tsx";
import Overview from "./pages/Overview.tsx";
import Single from "./pages/Single.tsx";
import Team from "./pages/Team.tsx";

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col h-screen">
        <Header />
        <div className="flex-grow border border-black border-t-0">
          <Routes>
            <Route path="/" element={<Navigate to="/single" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/single" element={<Single />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
