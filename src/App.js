import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// NAVIGATION
import Navs from "./components/Nav";

// COMPONENTS
import Banner from "./components/Banner";
import About from "./components/About";
import Rocket from "./components/Rocket";
import Elon from "./components/Elon";
import Launch from "./components/Launches";

// FOOTER
import Footer from "./components/Footer";

// PAGES
import Rocketpage from "./pages/Rocket-page";
import Rocketdetail from "./pages/Rocket-detail";

function App() {
  return (
    <Router>
      <div>
        <Navs />
        {/* <Banner />
      <About />
      <Rocket />
      <Elon />
      <Launch /> */}
        {/* <Rocketpage /> */}
        {/* <Rocketdetail /> */}
        {/* <Footer /> */}
        <Route exact path="/rockets" component={Rocketpage} />
        <Route exact path="/rockets/:rocket_id" component={Rocketdetail} />
      </div>
    </Router>
  );
}

export default App;
