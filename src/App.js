import "@veriff/genoma/lib/base.css";
import { AppHeader } from "@veriff/genoma";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <AppHeader>
        <AppHeader.Title>Movie app</AppHeader.Title>
      </AppHeader>
      <Switch>
        <Route path="/about">About</Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
