/**
 * Created by orlandogrodriguez on 8/26/17.
 */

var config = {
    apiKey: "AIzaSyCaXAHOIuy7orbovHaNLTcpBHU7SfhPgyQ",
    authDomain: "inventorymanagementsyste-4ff37.firebaseapp.com",
    databaseURL: "https://inventorymanagementsyste-4ff37.firebaseio.com",
    projectId: "inventorymanagementsyste-4ff37",
    storageBucket: "inventorymanagementsyste-4ff37.appspot.com",
    messagingSenderId: "719121174258"
};
firebase.initializeApp(config);

var firstName = "unassigned name";
var lastName  = "unassigned last";
var email     = "unassigned email";

function handleSignUp() {
    console.log("attempting sign up...");
    email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firstName = document.getElementById('first-name').value;
    lastName = document.getElementById('last-name').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    if (firstName.length == 0) {
        alert('Please enter a valid name');
        return;
    }
    if (lastName.length == 0) {
        alert('Please enter a valid last name');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification();
        user.updateProfile({
            displayName: firstName + " " + lastName
        }).then(function() {
            location.replace("unverified.html");
        });
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function gotoSignIn() {
    console.log('redirecting to signin page.');
    location.replace("signin.html");
}

document.getElementById('signup-button').addEventListener('click', handleSignUp, false);
document.getElementById('signin-button').addEventListener('click', gotoSignIn, false);