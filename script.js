

    const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATMnninyq1R90OqPtsRiorfxd-KXCMzfw",
    authDomain: "blogapp-32e76.firebaseapp.com",
    projectId: "blogapp-32e76",
    storageBucket: "blogapp-32e76.appspot.com",
    messagingSenderId: "496394064687",
    appId: "1:496394064687:web:003d4afff64ba94b5fc7da",
    measurementId: "G-1ZRBZQY15R"
  });


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();


function signupCall(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log('email' , email)
    console.log('password' , password)

    auth.createUserWithEmailAndPassword(email , password)
    .then((res) => {
        alert("singup succes")
       console.log(res)
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })

  }



function signInCall(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log('email' , email)
    console.log('password' , password)

    auth.signInWithEmailAndPassword(email , password)
    .then((res) => {
        alert('sigin success')
        let token = res.user.multiFactor.user.accessToken;
        if(token){
         localStorage.setItem("token" , token)

        }
       console.log(localStorage.getItem("token"))
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })

  }