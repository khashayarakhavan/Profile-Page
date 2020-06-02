import React , { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Dynamic/Header';
import SideNav from './components/Dynamic/SideNav';
import HotelView from './components/Dynamic/HotelView';
import Navigation from './components/Static/navigation';
import SurveyNew from './components/surveys/SurveyNew';
import Dashboard from './components/Dynamic/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <div className="container">
            {/* <Navigation /> */}
            <header>
            <Header/>
            </header>
            <div class="content">
              <SideNav/>
              <main>
              <HotelView/>
              </main>
            </div>

            {/* <Header />
            <Route exact path="/"   component={Landing} />
            <Route exact path="/surveys"  component={Dashboard} />
            <Route exact path="/surveys/new"  component={SurveyNew} /> */}
        </div>
      </BrowserRouter>
      </div>
     
    );
  }
}
//connect method links all actions to the component as Props. so you can reference them like props.
export default connect(null, actions)(App);
