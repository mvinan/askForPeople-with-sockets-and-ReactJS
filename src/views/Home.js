import React from 'react';
import PeopleFrame from '../components/PeopleFrame'

import PeopleActions from '../actions/PeopleActions'

export default class Home extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (<PeopleFrame/>)
  }
}