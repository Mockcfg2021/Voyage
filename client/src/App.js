import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Home } from "./components/common/home";
import Editprofile from "./components/Auth/editprofile.js";
import Test from "./components/Test/Test"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Auth} path="/auth" />
        <Route path="/home" component={Home} exact />
        <Route path="/editprofile/:id" component={Editprofile} name="editprofile"  exact />
        <Route path="/test" component={Test} exact />
      </Switch>
    </Router>
  );
};

export default App;
