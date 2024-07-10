const firebaseConfig = {
      apiKey: "AIzaSyDTIOm2Fg97OSfYyo8Gj4JtBz_sIIevUIo",
      authDomain: "kwitter-a6723.firebaseapp.com",
      databaseURL: "https://kwitter-a6723-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6723",
      storageBucket: "kwitter-a6723.appspot.com",
      messagingSenderId: "645390521398",
      appId: "1:645390521398:web:c75eda8d369f890fd7f497"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      })
      localStorage.setItem("room_name",room_name);
      window.location = kwitter_page.html;
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomName-"+room_names);
document.getElementById(output).innerhtml += row;
row = "<div class='room_name'id="+Room_names+"onclick'redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

