import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
          <p>백엔드 개발자 </p>
          <p>김수현</p>
          <p>
            인간이 서로 연결될 때, 기술은 단순한 도구를 넘어 의미 있는 역할을
            합니다. 저는 그 역할을 확장해, 사람들 간의 관계를 기술로 견고하게
            만들어주는 개발자가 되고 싶습니다.
          </p>
        </body>
        <footer>
          <Link to="/info">info</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
