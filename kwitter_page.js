//YOUR FIREBASE LINKS:-
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name -" + Room_names);
     row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
     //End code
     });});}
getData();

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value="";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html"
}