import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { App } from './App';
import { Homepage } from '../homepage/Homepage';
import { AllMovies } from '../all-movies/AllMovies';
import { MovieQuotes } from '../movie-quotes/MovieQuotes';
import { RecentMovies } from '../recent-movies/RecentMovies'
import { Forum } from '../movie-forum/Forum'

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
                        <Route path="/movie-quotes" component={MovieQuotes} />
                        <Route path="/forum" component={Forum} />
                    </Switch>
                </React.Fragment>
            </Router>
        </div>
    )
}

export default AppRouter