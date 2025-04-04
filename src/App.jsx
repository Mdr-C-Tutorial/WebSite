import './App.css';
import Card from './components/Main/Card';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="Tools"></div>
        <div className="Account">
          <p>Log in</p>
        </div>
        <div className="AppContent">
          <h1><span>Mdr</span> C Tutorial.</h1>
          <p>For all who loves C PL and CS.</p>
          <div className="Cards">
            <Card color={1} >
              <h2><span>M</span>odded.</h2>
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
