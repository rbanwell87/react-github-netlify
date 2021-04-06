import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <form>
        <input type="search" placeholder="Search a city..."></input>
        <input type="submit" value="search" class="btn btn-primary w-100" />
      </form>
      <br />
      <br />
      <small>
        <a
          className="Github-link"
          href="https://github.com/rbanwell87/react-github-netlify/settings"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Robin Banwell
      </small>
    </div>
  );
}

export default App;
