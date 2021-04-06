import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>{" "}
      <form>
        <input type="search" placeholder="Search a city..."></input>
        <input type="submit" value="search" />
      </form>
      <div className="City">
        <h1 id="city">Toronto</h1>
        <ul>
          <li id="date">Friday, 3:00</li>
          <li id="description">Cloudy</li>
        </ul>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt="weathers-icon"
          id="icon"
        />
        <span id="temperature">11</span>
        <span className="units">
          <a href="https://njh7z.csb.app/?#" id="celcius-link">
            °C
          </a>{" "}
          |
          <a href="https://njh7z.csb.app/?#" id="fahrenheit-link">
            °F
          </a>
        </span>
        <br />{" "}
        <ul>
          <li>
            Humidity: <span id="humidity">32</span>%
          </li>
          <li>
            Wind: <span id="wind">15</span> km/h
          </li>
        </ul>
      </div>
      <br />
      <strong> Forecast on it's way... </strong>
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
