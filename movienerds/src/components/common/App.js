//React & Redux imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

//Component imports
import { Header } from './Header';
import Homepage from '../homepage/Homepage'
import AllMovies from '../all-movies/AllMovies'
import RecentMovies from '../recent-movies/RecentMovies'
import { MovieQuotes } from '../movie-quotes/MovieQuotes'
import CharacterDetails from '../movie-forum/CharacterDetails'
import Forum from '../movie-forum/Forum'

//CSS file(s)
import '../../layout/App.css'

const App = () => {
  return (
      <Router>
        <>
          <div className="App">
            <Header />
          </div>
          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/movie/:id" component={Forum} />
              <Route path="/all-movies" component={AllMovies} />
              <Route path="/recent-movies" component={RecentMovies} />
              <Route path="/movie-quotes" component={MovieQuotes} />
              <Route path="/character-details/:id" component={CharacterDetails} />
          </Switch>
        </>
      </Router>
  );
}

export default connect()(App)