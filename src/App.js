
import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import SignUp from './screens/SignUp.js';
import { CardProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
function App() {
  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createuser' element={<SignUp />} />
            <Route path='/myOrder' element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
