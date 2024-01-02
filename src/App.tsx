import { useTheme } from "./utils/customHooks";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const {
    colors: { backgrounds, text },
    mode,
    toggle,
  } = useTheme();

  return (
    <div className="App" style={{ backgroundColor: backgrounds.primary }}>
      <header className="App-header">
        <h1 style={{ color: text.primary }}>{mode}</h1>
        <button onClick={() => toggle()}>Toggle Mode</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
