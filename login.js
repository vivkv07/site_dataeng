import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const login= document.getElementById("login");
login.addEventListener("click", function (event) {
 event.preventDefault()

 let email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   window.location.href = "dashboard.html";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
 
alert(errorMessage)
  });

})



const google = document.getElementById("google");
google.addEventListener("click",
 function registerWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "dashboard.html";


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

//reset password .

 const reset = document.getElementById("resetPassword")
 reset.addEventListener("click",function(){
  let email = document.getElementById("email").value;
  console.log(email)
if(email == "null"){
  alert("Please Enter Your email!!")
} else{

  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("Password reset email sent!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}



 })