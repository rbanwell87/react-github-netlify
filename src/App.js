import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Temperature from "./Temperature";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Temperature defaultCity="Toronto" />
      <hr />
      <Footer />
    </div>
  );
}
