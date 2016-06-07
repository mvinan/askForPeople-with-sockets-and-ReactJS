import React from 'react';

export default class PeoplePhoto extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <img src={this.props.peoplePhoto.picture.thumbnail} alt="peope photo"/>
      </div>
      )
  }
}
