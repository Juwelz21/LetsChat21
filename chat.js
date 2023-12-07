// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCG0OPs44oYrLO3_lVM6lctgdZ-wiYigIw",
    authDomain: "kwitter-b54bc.firebaseapp.com",
    databaseURL: "https://kwitter-b54bc-default-rtdb.firebaseio.com",
    projectId: "kwitter-b54bc",
    storageBucket: "kwitter-b54bc.appspot.com",
    messagingSenderId: "1036886661294",
    appId: "1:1036886661294:web:2ebd85d291c4faee91b53f"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}
  
row
