import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Login from './component/Login';
import Signup from './component/signup';
import Forms from './component/forms';

function App() {
  return (
    <Switch>
      {/* <Route exact path='/' component={Login}/> */}
      <Route exact path='/' component={Signup}/>
      <Route exact path='/forms' component={Forms}/>
    </Switch>
  );
}

export default App;
