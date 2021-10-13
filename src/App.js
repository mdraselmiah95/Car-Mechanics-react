import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:serviceId">
            <Booking />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
