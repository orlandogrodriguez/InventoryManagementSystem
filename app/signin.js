(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCaXAHOIuy7orbovHaNLTcpBHU7SfhPgyQ",
        authDomain: "inventorymanagementsyste-4ff37.firebaseapp.com",
        databaseURL: "https://inventorymanagementsyste-4ff37.firebaseio.com",
        projectId: "inventorymanagementsyste-4ff37",
        storageBucket: "inventorymanagementsyste-4ff37.appspot.com",
        messagingSenderId: "719121174258"
    };
    //firebase.initializeApp(config);
    const txtemail = document.getElementById('email');
    const txtpassword = document.getElementById('password');
    const btnSignUp = document.getElementById('signup-button');
    const btnSignIn = document.getElementById('signin-button');

    btnSignIn.addEventListener('click', function() {
        const email = txtemail.value;
        const password = txtpassword.value;
        const auth = firebase.auth();

        console.log('attempting sign in...');

        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                console.log(errorMessage);
            }
            console.log(error);
        });

        promise.then(function() {
            console.log('Logging in... redirecting to dashboard.')
            location.replace('dashboard.html');
        });

    });
    btnSignUp.addEventListener('click', gotoSignUp);

}());

function gotoSignUp() {
    console.log('Redirecting to signup page...');
    location.replace("signup.html");
}