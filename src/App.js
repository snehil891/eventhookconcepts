import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import FunctionWithoutParameterComponent from './EventDemo/FunctionWithoutParameterComponent.js';
import FunctionWithParameter from './EventDemo/FunctionWithParameterComponent.js';
import HandlingEventWithState from './EventDemo/HandlingEventWithState.js';
import UseState from './HookDemo/useState.js';
import UseStateUser from './HookDemo/useStateUser.js';
import UseEffectCounter from './UseEffectDemo/useEffectCounter.js';
import Parent from './HookDemo/PropDrilling/Parent.js';
import UserConsumer from './ContextApi/userConsumer.js';
import CountingComponent from './HookDemo/CustomHook/CountingComponent.js';
import SetUserDetails from './LocalStorageDemo/setUserDetails.js';
import GetUserDetails from './LocalStorageDemo/GetUserDetails.js';
import UseCustomHook from './LocalStorageDemo/UseCustomHook.js';

function App() {
  const user = { firstName: 'Snehil', lastName: 'Sah' };
  return (
    <div className='App'>
      <h3 className="display-1">Event Demo</h3>
      <hr />
      <FunctionWithoutParameterComponent />
      <FunctionWithParameter />
      <HandlingEventWithState />
      <hr />
      <h3>Hook Demo</h3>
      <UseState />
      <br />
      <UseStateUser />
      <br />
      <hr />
      <h3 className="display-1">Use Effect Demo</h3>
      <UseEffectCounter />
      <hr />
      <h3 className="display-1">Prop Drilling Demo</h3>
      <Parent user={user} />
      <hr />
      <h3 className="display-1">Context Api Demo</h3>
      <UserConsumer />
      <hr />
      <h3 className="display-1">Custom Hook Demo</h3>
      <CountingComponent />
      <hr />
      <h3 className="display-1">Local Storage Demo</h3>
      <SetUserDetails />
      <br />
      <GetUserDetails />
      <hr />
      <h3 className='display-1'>Local Storage Custom Hook Demo</h3>
      <UseCustomHook />
    </div>
  );
}

export default App;
