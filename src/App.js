import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Signup from './component/signup';
import Admin from './component/admin';
import Profile from './component/profile';
import Stats from './component/stats';
import Adminhome from './component/adminhome';
import Form from './component/form';
import Addform from './component/addform';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Signup}/>
      <Route exact path='/adminhome' component={Adminhome}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/stats' component={Stats}/>
      <Route exact path='/form' component={Form}/>
      {/* <Route exact path='/form:fid' component={Form}/> */}
      <Route exact path='/addform' component={Addform}/>
    </Switch>
  );
}

export default App;
