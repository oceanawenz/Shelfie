import React, {Component} from 'react';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      inventory: [],
    }
    this.getInventory = this.getInventory.bind(this);
  }
  
  componentDidMount() {
    this.getInventory();
  }
  
 getInventory() {
   axios.get(`/api/inventory`).then(response => {
     this.setState({
       inventory: response.db 
     })
   })
 } 

  
  render () {
  return (
    <div className="App">
     <Header/>
     <Dashboard/>
     <Form/>
    </div>
    );
  }
}

