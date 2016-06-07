import Reflux from 'reflux';
// import $ from 'jquery';
import io from 'socket.io-client'

import PeopleActions from '../actions/PeopleActions.js'

var PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],

  fetchPeople: function(){
    this.socket = io('http://localhost:4000')
    this.socket.on('people', (people)=>{
      var people = JSON.parse(people)
      people = people.results[0]
      this.trigger(people)
    })
  },

  askForPeople: function(){
    this.socket.emit('ask')
  }
  // init: function(){
  //   this.fetchPeople();
  // },
  // fetchPeople: function(){
  //   $.ajax({
  //     url: 'https://randomuser.me/api/',
  //     dataType: 'json',
  //     cache: false,
  //     context: this
  //     // success: function(data){
  //     //   console.log('fetch Complete')
  //     //   let people = data.results[0]
  //     //   this.trigger(people)
  //     // }
  //   })
  //   .done( function(data){
  //     let people = data.results[0]
  //     this.trigger(people)
  //   })
  // }

})

module.exports = PeopleStore;