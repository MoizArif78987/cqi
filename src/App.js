import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Authorization from './components/authorization';
import Adminpanel from './components/adminpanel';
import Forms from './components/forms';
import Addform from './components/addform';
import Addadmin from './components/addadmin';
import Addusers from './components/addusers';
import Addteachers from './components/addteachers';
import Profile from './components/profile';
import Form from './components/form';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Authorization}/>
      <Route exact path='/adminpanel' component={Adminpanel}/>
      <Route exact path='/forms' component={Forms}/>
      <Route exact path='/addform' component={Addform}/>
      <Route exact path='/addadmin' component={Addadmin}/>
      <Route exact path='/addusers' component={Addusers}/>
      <Route exact path='/addteachers' component={Addteachers}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/form/:id' component={Form}/>
    </Switch>
  );
}

export default App;
