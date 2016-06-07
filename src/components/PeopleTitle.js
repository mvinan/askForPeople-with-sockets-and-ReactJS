import React from 'react';

export default class PeopleTitle extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <h2>{this.props.peopleName.name.first}</h2>
      </div>
      )
  }
}
