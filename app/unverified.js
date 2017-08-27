/**
 * Created by orlandogrodriguez on 8/27/17.
 */
document.getElementById('login-btn').addEventListener('click', gotoSignIn);

function gotoSignIn() {
    console.log('redirecting to sign in page...');
    location.replace('signin.html');
}