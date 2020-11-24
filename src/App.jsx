import './styles/index.scss';
import Login from './views/Login';
import Training from './views/Training';
import Accompaniment from './views/Accompaniment';
import ActionPlan from './views/ActionPlan';
import PageNotFound from './views/PageNotFound';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';

const App = () => (
    <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/capacitacion">
          <Training />
        </Route>
        <Route path="/acompañamiento">
          <Accompaniment />
        </Route>        
        <Route path="/accion" component={ActionPlan} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
