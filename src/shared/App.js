import React from 'react';
import { Route } from 'react-router-dom';

import Nav from 'components/Nav';
import Home from 'components/Home'
import About from 'components/About';
import Footer from 'components/Footer';

class App extends React.Component {
  render() {
    const idolList = this.props.idolList;
    return (
      <div>
        <Nav />
        <Route exact path="/" render={(props) => (<Home idolList={idolList} />)} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;