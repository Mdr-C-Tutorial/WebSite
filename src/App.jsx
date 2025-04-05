import './App.css';
import Card from './components/Main/Card';
import { Link } from 'react-router-dom';
import { FaTools, FaGithub } from 'react-icons/fa'; import { VscVscode } from "react-icons/vsc";
import { SiCompilerexplorer } from 'react-icons/si';
import { VscReferences } from 'react-icons/vsc';

function App() {
  return (
    <div className="App">
      <div className="ToolBar">
        <div className="ToolBarMain">
          <FaTools />
        </div>
        <div className="ToolBarItems">
          <Link><VscVscode /></Link>
          <Link><FaGithub /></Link>
          <Link><SiCompilerexplorer /></Link>
          <Link><VscReferences /></Link>
        </div>
      </div>
      <div className="AppContainer">
        <div className="Tools"></div>
        <div className="Account">
          <p>Log in</p>
        </div>
        <div className="AppContent">
          <h1><span>Mdr</span> C Tutorial.</h1>
          <p>- 献给所有热爱C语言和计算机科学的人 -</p>
          <div className="Cards">
            <Card color={1} >
              <h2><span>M</span>odded.</h2>
              <p>Learn about our <Link>Guided Tutorial</Link>.</p>
              <p><Link>Document</Link> deployed by <Link>Vitepress</Link>.</p>
              <p>Check your code on <Link>MdrOJ</Link>.</p>
              <p>Share your idea and ask questions on <Link>MdrForum</Link>.</p>
              <p>Original <Link>Uniform Development Environment</Link> suitable for learners.</p>
              <p><Link>Videos</Link> on <Link>Bilibili</Link>.</p>
              <p>Join the <Link>QQ Group</Link> to discuss.</p>
            </Card>
            <Card color={2}>
              <h2><span>D</span>edicated.</h2>
              <p>Pure <Link>Open-source</Link> and <Link>Free</Link>.</p>
              <p>Covers multiple areas: <Link>Compilers</Link> &&  <Link>Databases</Link> && <Link>Operating Systems</Link>.</p>
              <p>Carefully selected <Link>Exercises</Link>.</p>
              <p>Find best practices.</p>
              <p>Thanks to all <Link>Contributors</Link> and <Link>Sponsors</Link>.</p>
            </Card>
            <Card color={3}>
              <h2><span>R</span>edefined.</h2>
              <p>Not only a tutorial for <Link>C Language</Link>, but an Interpretation of <Link>Computer Science</Link>.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
