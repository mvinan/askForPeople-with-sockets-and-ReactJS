import React from 'react';
import Reflux from 'reflux';
import ReactMixin from'react-mixin';

import PeopleFrame from '../components/PeopleFrame.js';
import PeopleActions from '../actions/PeopleActions.js';
import PeopleStore from '../stores/PeopleStore.js';

@ReactMixin.decorate(Reflux.connect(PeopleStore, 'people'))
export default class Home extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    PeopleActions.fetchPeople()
  }

  handlePeople(){
    PeopleActions.askForPeople()
  }

  render(){
    if(this.state.people != null){
      return (
        <div>
          <PeopleFrame peopleData={this.state.people}/>
          <button onClick={this.handlePeople.bind(this)}>Preguntar</button>
        </div>
      )
    }else{
      return <h3>Loading…</h3>
    }
  }
}