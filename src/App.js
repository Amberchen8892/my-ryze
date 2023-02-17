import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Questions from "./pages/Questions";
import MarketplaceHome from "./pages/marketplace/MarketplaceHome";
import NewMarketPlace from "./pages/marketplace/NewMarketPlace";
import Identity from "./pages/Identity";
import CreditMonitoring from "./pages/CreditMonitoring";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/questions" component={Questions} />
            <Route path="/marketplace/:source" component={NewMarketPlace} />
            <Route path="/marketplace" component={MarketplaceHome} />
            <Route path="/identity-protection" component={Identity} />
            <Route path="/credit-mornitoring" component={CreditMonitoring} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </>
  );
}

export default App;
