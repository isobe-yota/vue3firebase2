
<script setup lang="ts">
 import firebase from "firebase/app";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7W4_4JY83vpCR1dpcBZimozGxpDqQDXs",
  authDomain: "vue3firebasetest2.firebaseapp.com",
  projectId: "vue3firebasetest2",
  storageBucket: "vue3firebasetest2.appspot.com",
  messagingSenderId: "625617398171",
  appId: "1:625617398171:web:a7904dc39bbffd4735193e",
  measurementId: "G-SV327DCEVN"
};
try {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.collection("user").add({ name: "taro" }).then(docRef => {
      // success
  }).catch(error => {
      console.error(error);
  });
} catch (e) {
  console.error(e);
}
            
            </script> 