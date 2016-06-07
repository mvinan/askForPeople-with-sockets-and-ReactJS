import Reflux from 'reflux';
import $ from 'jquery';

import PeopleActions from '../actions/PeopleActions.js'

var PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],

  // init: function(){
  //   this.fetchPeople();
  // },

  fetchPeople: function(){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      cache: false,
      context: this
      // success: function(data){
      //   console.log('fetch Complete')
      //   let people = data.results[0]
      //   this.trigger(people)
      // }
    })
    .done( function(data){
      let people = data.results[0]
      this.trigger(people)
    })
  }
})

module.exports = PeopleStore;