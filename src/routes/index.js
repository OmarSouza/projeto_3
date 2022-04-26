import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={SignIn}/>
        </Switch>
    )
}