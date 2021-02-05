import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

// components
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Login /> */}
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
