import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';

// Importando vistas
import Login from './views/Login';
import Training from './views/Training';
import Accompaniment from './views/Accompaniment';
import ActionPlan from './views/ActionPlan';
import PageNotFound from './views/PageNotFound';
import UserProfile from './views/UserProfile';

// Importando estilos
import './styles/index.scss';
// import userProfile from './views/UserProfile';

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
        <Route path="/profile" >
          <UserProfile/>
        </Route>   
        <Route component={PageNotFound} /> 
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
