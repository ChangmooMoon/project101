import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import axios from 'axios';

class Root extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      idolList: []
    }
  }
  componentDidMount() {
      axios.get('/idol')
      .then((response)=>{
          this.setState({idolList: response.data})
      }).catch((error)=>{
        console.log('Error axios', error);
      })
  }
  render(){
    const { idolList } = this.state;
    return(
    <BrowserRouter>
      <App idolList={idolList}/>
    </BrowserRouter>
    )
  }
};

export default Root;