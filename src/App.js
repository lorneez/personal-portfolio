import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import FeedPage from "./feed/FeedPage";
import CreateEntryPage from "./feed/CreateEntryPage.js";
import WorkoutLogPage from "./workout/WorkoutLogPage";
import CreateFitnessLogPage from "./workout/CreateFitnessLogPage";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={HomePage} />
              {/*<Route path="/feed" exact component={FeedPage} />*/}
              {/*<Route path="/feed/create" exact component={CreateEntryPage} />*/}
              {/*<Route path="/workout" exact component={WorkoutLogPage} />*/}
              {/*<Route path="/workout/create/:type" exact component={CreateFitnessLogPage} />*/}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
