import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Nav user={"mdr"} />
      <Main />
    </div>
  );
}

export default App;
