<script type="module">
    // Import the functions you need from the SDKs you need
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
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
	const database = getDatabase(app);
	const auth = getAuth();
    auth.languageCode = 'en';
    const provider = new GoogleAuthProvider();

    const googleLogin  =document.getElementById("google-log-in") 
    googleLogin.addEventListener("click".function() {
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    })
  </script>