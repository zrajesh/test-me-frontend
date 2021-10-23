// Imports
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import {Provider} from "react-redux";
// Import pages
import HomePage from "./pages/HomePage";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
