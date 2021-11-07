// Imports
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
// Import pages
import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";

function App() {
  return (
      <Provider store={store}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/assessment/:title" component={AssessmentPage} />
            <Route exact path="/score/assessment" component={ScoreBoard} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
