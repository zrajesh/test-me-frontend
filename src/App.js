// Imports
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import {Provider} from "react-redux";
// Import pages
import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/assessment/:title" component={AssessmentPage} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
