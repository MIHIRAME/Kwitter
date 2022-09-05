const firebaseConfig = {
      apiKey: "AIzaSyBrK6y0O73GFUbWDJtWR3izxSMgWyy9rbc",
      authDomain: "kwitter-fbf1d.firebaseapp.com",
      projectId: "kwitter-fbf1d",
      storageBucket: "kwitter-fbf1d.appspot.com",
      messagingSenderId: "965341683562",
      appId: "1:965341683562:web:ea8f6dcdb1da35219fcf13"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
