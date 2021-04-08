import "./App.css";
import City from "./City";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <Temperature />

      <Forecast />
      <hr />
      <br />
      <Footer />
    </div>
  );
}
