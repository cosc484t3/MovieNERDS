import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { App } from './App';
import { Homepage } from './Homepage';
import { AllMovies } from './AllMovies';
import { RecentMovies } from './RecentMovies'

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
                    </Switch>
                </React.Fragment>
            </Router>
        </div>
    )
}

export default AppRouter