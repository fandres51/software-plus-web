import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import ErrorPage from './ErrorPage';
import MainPage from './MainPage';
import TeamMemberPage from './TeamMemberPage';
import TeamPage from './TeamPage';

const App = () => {
    return ( 
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/team">
                        <TeamPage />
                    </Route>
                    <Route path="/team/:member">
                        <TeamMemberPage />
                    </Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
 
export default App;