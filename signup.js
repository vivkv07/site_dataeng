import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDWJFTfA4F42kQ46kE70XNpiBf_FOWse48",
    authDomain: "authentication-9cc44.firebaseapp.com",
    databaseURL: "https://authentication-9cc44-default-rtdb.firebaseio.com",
    projectId: "authentication-9cc44",
    storageBucket: "authentication-9cc44.appspot.com",
    messagingSenderId: "150936902638",
    appId: "1:150936902638:web:d0e0aef2030a023f3b4cff"
  };

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
auth.useDeviceLanguage()

//grab
const register = document.getElementById("register");
register.addEventListener("click", function (event) {
 event.preventDefault()

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   alert("Account Created , Login")
   window.location.href = "login.html";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)

  });

})




const google = document.getElementById("google");
const github = document.getElementById("github");

google.addEventListener("click",
 function registerWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "pricing.html";




  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
alert(errorMessage)


  });



 }
)

github.addEventListener("click",
 function registerWithGithub() {
  signInWithCredential(auth, credential)
  .then((result) => {
    // Signed in 
    window.location.href = "pricing.html";
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // ...
  });



 }
)