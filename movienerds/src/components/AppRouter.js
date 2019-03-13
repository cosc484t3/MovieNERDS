import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { App } from './App';
import { Homepage } from './Homepage';
import { AllMovies } from './AllMovies';
import { NewMovie } from './NewMovie'
import { MovieQuotes } from './MovieQuotes';
import { RecentMovies } from './RecentMovies'
import { MovieDetail } from './MovieDetail'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <React.Fragment>
                    <Route component={App} />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/all-movies" component={AllMovies} />
                        <Route path="/recent-movies" component={RecentMovies} />
                        <Route path="/new-movie" component={NewMovie} />
                        <Route path="/movie-quotes" component={MovieQuotes} />
                        <Route path="/:id" component={MovieDetail} />
                    </Switch>
                </React.Fragment>
            </Router>
        </div>
    )
}

export default AppRouter