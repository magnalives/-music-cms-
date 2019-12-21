import React from "react";
import "./style.css";
import AppHeader from "./components/header/mainHead";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import about from "./pages/about";
import home from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        <div id="maincnt" className="mainCont transition-small">
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about" exact component={about} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
