import './App.css';
import Fun from './component/Fun';
import Cls from './component/Cls';

function App() {
  const st3={
    backgroundImage:"url('https://static-cse.canva.com/blob/140234/Rainbow-Gradient-Pink-and-Purple-Zoom-Virtual-Background.png')",
  backgroundSize:"cover"
 
  }
  return (
     <div className="App" style={st3}>
      <Fun/>
      <Cls/>
    </div>
  );
  }

export default App;
