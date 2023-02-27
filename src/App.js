import logo from './logo.svg';
import './App.css';
import Main from './Main';
// import "./Image/Bright.jpg"
import Moveis from "../src/Image/Bright.jpg"
import Image1 from "../src/Image/tomb-raider-poster-fixed.webp"

function App() {
  return (
    <div className="App">
      
      <Main
       img={Moveis}
       h2="Bright"
       p="2017,David Ayer"
       btn="117 min"
       p1="Action,Crime,Fansty"
 
       p2="Set int the world where fantasy creatures live side by side with A humans cop is forced to work with an Orc to find a weapon everyone is prepared to kill for"
       img1={Moveis}
      
      />
      
      <Main
      img={Image1}
      h2="Tomb Raider"
      p="2018,Roar Uthaug"
      btn="125 min"
      p1="Action,Crime,Fansty"

      p2="Lara Croft,the fiercely independent daughter of a missing adventure, must push herself beyond her limits when she finds herself on the island where her father disappeared"
      img1={Image1}
      
      />
    </div>
  );
}

export default App;
