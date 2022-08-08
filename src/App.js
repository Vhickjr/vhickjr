import pizza1 from "./pizza1.png";
import "./App.css";
import Mailer from "./components/mailer";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={pizza1} className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            <p className="vic2">something's cooking,</p>{" "}
            <p className="vic1"> check back soon :)</p>
          </p>
        </header>
        <div>
          <Mailer></Mailer>
        </div>
      </div>
    </div>
  );
}

export default App;
