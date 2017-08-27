/**
 * Created by orlandogrodriguez on 8/26/17.
 */
function handleSignUp() {
    console.log("attempting sign up...");
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
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

    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
    alert("successfully created user");
}

function gotoSignIn() {
    console.log('redirecting to signin page.');
    location.replace("signin.html");
}

document.getElementById('signup-button').addEventListener('click', handleSignUp, false);
document.getElementById('signin-button').addEventListener('click', gotoSignIn, false);