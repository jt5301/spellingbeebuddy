import logo from './logo.svg';
import './App.css';
import Hexagon from '../components/Hexagon.js'


function App() {

  function addLetter(event){
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <div className = 'hexContainer'>
        <Hexagon checkLetter = {addLetter} id = '1' className = "hexOuter">
          <div></div>
        </Hexagon>

        <Hexagon className = "hexOuter"/>
        <Hexagon className = "hexOuter"/>
        <Hexagon className = "hexOuter"/>
        <Hexagon className = "hexOuter"/>
        <Hexagon className = "hexOuter"/>
        <Hexagon className = "hexCenter"/>
      </div>
      <div className = 'wordsContainer'>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
