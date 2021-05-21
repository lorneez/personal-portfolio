import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";
import FeedPage from "./FeedPage";
import MakeEntryPage from "./MakeEntryPage";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/feed/" exact component={FeedPage} />
              <Route path="/feed/create" exact component={MakeEntryPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
