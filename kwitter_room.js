
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDaAb6bm1Fl9aXD9bGPhLqOk_lwB5YyMbU",
      authDomain: "kwitter94-2fb7f.firebaseapp.com",
      databaseURL: "https://kwitter94-2fb7f-default-rtdb.firebaseio.com",
      projectId: "kwitter94-2fb7f",
      storageBucket: "kwitter94-2fb7f.appspot.com",
      messagingSenderId: "352311771566",
      appId: "1:352311771566:web:a910e7fbd793e4518d083f",
      measurementId: "G-WXWTEQNV3X"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}

