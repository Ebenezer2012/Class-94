var firebaseConfig = {
    apiKey: "AIzaSyDavRaCGQUV9cbzKlVGR0ELPwjw5MvyLJw",
    authDomain: "class94-d4b65.firebaseapp.com",
    databaseURL: "https://class94-d4b65-default-rtdb.firebaseio.com",
    projectId: "class94-d4b65",
    storageBucket: "class94-d4b65.appspot.com",
    messagingSenderId: "120947459083",
    appId: "1:120947459083:web:bf970bae6b8e884a4c330e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 

function addUser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}