import logo from './logo.svg';
import './App.css';
import Employee from './component/Employee.js';
import Count from './component/Count.js';

function App() {
  const st1={
width:"95%",
textAlign: "right"
}
  const st3={
    backgroundImage:"url('https://static-cse.canva.com/blob/140234/Rainbow-Gradient-Pink-and-Purple-Zoom-Virtual-Background.png')",
  backgroundSize:"cover"
 
  }
  const st4={
   fontSize:"80px",
  textAlign: "center",
  fontFamily: "'Kaushan Script', cursive"
  
  }
  return (
     <div className="App" style={st3}>
       <br></br>
       <h1 style={st4}>PROPS AND STATE</h1>
       <table style={st1}>
       <tr>
           <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
           <td>
             <Employee empN="Chona S" cN="Hakuna Matata" rn="303"  des="Trainee-Associate Software Engineer" wl="Chennai" img="https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png"/>
             <Count /> 
           </td>
           <td >
             <Employee empN="Kamali S" cN="Mindtree" rn="106" des="Trainee-Associate Software Engineer" wl="Chennai" img="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Waitress-512.png"/> 
             <Count />
          </td>
       </tr>
     </table>
    </div>
  );
  }

export default App;
