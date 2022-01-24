
import * as firebase from "firebase/app";
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQhG7q0Ffk_Wcu2hGmWLMjFOkP7Ry4CfI",
    authDomain: "leadd-7db59.firebaseapp.com",
    databaseURL: "https://leadd-7db59-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "leadd-7db59",
    storageBucket: "leadd-7db59.appspot.com",
    messagingSenderId: "704638910336",
    appId: "1:704638910336:web:c13eff8ed2e0ef979d4b65"
  };
    
  let app = null;
  if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);  
  }

  export default firebase
