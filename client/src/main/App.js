import logo from './logo.svg';
import './App.css';
import Hexagon from '../components/Hexagon.js'

//hexagon itself doesn't need to know letter. logic all happens in app
function App() {
  return (
    <div className="App">
      <div className = 'HexContainer'>
      <Hexagon className = "App-logo"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
      <div className = 'wordsContainer'>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
