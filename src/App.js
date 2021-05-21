import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";
import FeedPage from "./FeedPage";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/feed/" exact component={FeedPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
