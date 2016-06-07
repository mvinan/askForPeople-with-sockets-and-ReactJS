import React from 'react';
import PeoplePhoto from './PeoplePhoto.js'
import PeopleTitle from './PeopleTitle.js'

export default class PeopleFrame extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <PeopleTitle peopleName={this.props.peopleData} />
        <PeoplePhoto peoplePhoto={this.props.peopleData} />
      </div>
      )
  }
}
