import Reflux from 'reflux';
import PeopleActions from '../actions/PeopleActions'

let PeopleStore = Reflux.createStore({
  listeneable: [PeopleActions]
})