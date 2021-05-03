import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Temperature defaultCity="Toronto" />
      <Forecast />
      <hr />
      <br />
      <Footer />
    </div>
  );
}
