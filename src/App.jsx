import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';

// Importando vistas
import Login from './views/Login';
import Training from './views/Training';
import Accompaniment from './views/Accompaniment';
import ActionPlan from './views/ActionPlan';
import PageNotFound from './views/PageNotFound';

// Importando estilos
import './styles/index.scss';

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
