import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Home } from "./components/common/home";
import Editprofile from "./components/Auth/editprofile.js";
import ForgotPassword from "./components/Auth/forgotPassword";
import Test from "./components/Test/Test";
import Test1 from "./components/Test/Tes1";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Auth} path="/auth" />
        <Route path="/home" component={Home} exact />
        <Route
          path="/editprofile/:id"
          component={Editprofile}
          name="editprofile"
          exact
        />
        <Route
          path="/forgotPassword/:id"
          component={ForgotPassword}
          name="forgotpassword"
          exact
        />
        <Route path="/test" component={Test} exact />
        <Route path="/tes1" component={Test1} exact />
      </Switch>
    </Router>
  );
};

export default App;
