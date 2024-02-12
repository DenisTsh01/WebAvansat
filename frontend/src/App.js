import React from 'react';
import './App.css';
import './tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import TestsPage from './pages/TestsPage';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import { DarkModeProvider } from './components/DarkModeContext';

import {Provider} from 'react-redux';
import store from './store'
import EventAddPage from './pages/EventAddPage';

function App() {
  return (

    <Provider store={store}>
      <DarkModeProvider>
    <Router>
     
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/reset-password' element={<ResetPassword />} exact />
          <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} exact />
          <Route path='/activate/:uid/:token' element={<Activate/>} exact />
          <Route path='/teste' element={<TestsPage/>} exact />
          <Route path='/add_event' element={<EventAddPage/>} exact />


          {/* Add other routes here */}
        </Routes>
   
    </Router>
    </DarkModeProvider>
    </Provider>
  );
}

export default App;
