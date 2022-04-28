import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Restaurante from '../pages/Restaurante';
import NovoRestaurante from '../pages/NovoRestaurante';
import Receita from '../pages/Receita';
import NovaReceita from '../pages/NovaReceita';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/register' component={SignUp}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/restaurante' component={Restaurante}/>
            <Route exact path='/novoRest' component={NovoRestaurante}/>
            <Route exact path='/receita' component={Receita}/>
            <Route exact path='/novaRec' component={NovaReceita}/>
        </Switch>
    )
}