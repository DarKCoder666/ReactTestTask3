import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import history from './history';
import CompetitionPage from './pages/CompetitionPage';
import CompetitionsListPage from './pages/CompetitionsListPage';

import './styles/index.scss';

function App() {
  return (
    <div className="App container">
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" exact component={CompetitionsListPage} />
          <Route path="/:competitionID" exact component={CompetitionPage} />
          <Route path="/:competitionID/:sectionName" component={CompetitionPage} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
