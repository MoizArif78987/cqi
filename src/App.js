import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Login from './component/Login';
import Signup from './component/signup';
import Forms from './component/forms';
import Admin from './component/admin';
import Profile from './component/profile';
import Stats from './component/stats';
import Adminhome from './component/adminhome';
import Form from './component/form';

function App() {
  return (
    <Switch>
      {/* <Route exact path='/' component={Login}/> */}
      <Route exact path='/' component={Signup}/>
      <Route exact path='/forms' component={Forms}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/stats' component={Stats}/>
      <Route exact path='/adminhome' component={Adminhome}/>
      <Route exact path='/form' component={Form}/>
      {/* <Route exact path='/form:fid' component={Form}/> */}
    </Switch>
  );
}

export default App;
