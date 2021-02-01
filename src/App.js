import {Features, Hero, Navigation} from "./components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About, Home} from "./pages";

function App() {
  return (
      <Router>
        <Navigation />
        <switch>
            <Route component={Home} exact path="/" />
            <Route component={About} exact path="/about" />
        </switch>
      </Router>
  );
}

export default App;
