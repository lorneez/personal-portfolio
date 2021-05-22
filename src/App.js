import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import FeedPage from "./feed/FeedPage";
import MakeEntryPage from "./feed/MakeEntryPage";
import WorkoutLogPage from "./workout/WorkoutLogPage";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/feed" exact component={FeedPage} />
              <Route path="/feed/create" exact component={MakeEntryPage} />
              <Route path="/workout" exact component={WorkoutLogPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
