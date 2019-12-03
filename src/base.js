import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "yolo.com",
  databaseURL: "https://react-yolo.com"
}


const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base;
