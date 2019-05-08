import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Test from './components/test/Test';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import AddContact from './components/contacts/AddContact';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';

library.add(faStroopwafel);

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="Contact Manager" />
          <div className="container" style={{ marginTop: '4.5rem' }}>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
