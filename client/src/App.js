import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import {Home}  from "./components/common/home";
import Editprofile from "./components/Auth/editprofile.js";
import ForgotPassword from "./components/Auth/forgotPassword";
import Test from "./components/Test/Test";
// import Test1 from "./components/Test/Tes1";
import Resources from "./components/Resources/resources";
import Resource from "./components/Resources/resource";
import NGOInputs from "./components/NGO/ngoinput";
import Game from "./components/Game/Game";
import Leaderboard from "./components/LeaderBoard/Leaderboard";
import Feedback from "./components/Feedback/feedback";
import Landing from "./components/Home/voyage";
import Forum from "./components/Community Service/forum"
import ShowFeedback from "./components/Feedback/TeacherFeedback";

const App = () => {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path="/" component={Landing} exact />
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
        {/* <Route path="/tes1" component={Test1} exact /> */}
        <Route path="/Resources" component={Resources} exact />
        <Route path="/Resource/:id" component={Resource} exact />
        <Route path="/NGOInputs" component={NGOInputs} exact />
        <Route path="/game/" component={Game} exact />
        <Route path="/leaderboard/" component={Leaderboard} exact />
        <Route path="/feedback" component={Feedback} exact />
        <Route path="/forum" component={Forum} exact />
        <Route path="/showfeedback" component={ShowFeedback} exact />
      </Switch>
    </Router>
  );
};

export default App;
