import logo from "./logo.svg";
import "./App.css";
import CountArray from "./redux/CountArray";

function App() {
  const a = {
    backgroundImage:
      "url('http://knockknockgiveasock.org/wp-content/uploads/2016/08/Fantasy-Sky-Step3b.jpg')",
  };
  return (
    <div className="App" style={a}>
      <CountArray />
    </div>
  );
}

export default App;
