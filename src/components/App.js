import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

/*

Switch - will make the program stop looking for other routes once one route matches.
Here, because the last component is the page not found, it will go through each route until it hits the last undefined route

3 Main Principles of Redux:
 - one immutable store
 - actions trigger changes
 - reducers update state, pure functions that accept current state and an action and returns a new state

 ***Check "A Chat with Redux" under Connecting React to Redux for a high level download on communication flow between React/Actions/Reducers/Store

 ------------------------
 ACTION CREATOR EX:

    rateCourse(rating) {
      return { type: RATE_COURSE, rating: rating }
    }

    'type' is required
-------------------------

store.dispatch(action)
store.subscribe(listener)
store.getState()
replaceReducer(nextReducer)

------------------------------------
REDUCERS:

function myReducer(state, action) {
  //return new state based on action
}

Never:
Mutate args
Perform side effects
Call non-pure functions (return should always be the same with the same args)



*/
