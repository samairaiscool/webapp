//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name =message_data['name']; 
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"img class'user_tick'src='tick_png'></h4>";
message_with_tag="<h4> class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning 'id="+firebase_message_id+"value"+like+"onclick='updateLike"
//End code
      } });  }); }
getData();
function send()
{msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            lie:0
      })
      document.getElementById("msg").value = "";
}
