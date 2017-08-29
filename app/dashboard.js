//Firebase

var config = {
    apiKey: "AIzaSyCaXAHOIuy7orbovHaNLTcpBHU7SfhPgyQ",
    authDomain: "inventorymanagementsyste-4ff37.firebaseapp.com",
    databaseURL: "https://inventorymanagementsyste-4ff37.firebaseio.com",
    projectId: "inventorymanagementsyste-4ff37",
    storageBucket: "inventorymanagementsyste-4ff37.appspot.com",
    messagingSenderId: "719121174258"
};
firebase.initializeApp(config);

const dbref = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
        if (user.emailVerified) {
            document.getElementById('user-display-name').innerHTML = user.displayName;
        } else {
            location.replace('unverified.html');
        }
    } else {
        console.log('no user signed in');
        location.replace('index.html');
    }
});

// Item Parameters
var guarderia = "";
var articulo  = "";
var unidad    = "";
var cantidad  = 0;

// Functions
function handleLogOut() {
    firebase.auth().signOut().then(function() {
        console.log('log out successfull...');
        location.replace('index.html');
    }).error(function() {

    });
}

function handleAddItem() {

    guarderia = document.getElementById('input-guarderia').value;
    articulo  = document.getElementById('input-articulo').value;
    unidad    = document.getElementById('input-unidad').value;
    cantidad  = document.getElementById('input-cantidad').value;

    checkForValidInputs();

    dbref.child('items').push().set({
        'Guarderia':guarderia,
        'Articulo':articulo,
        'Unidad':unidad,
        'Cantidad':cantidad
    });
    console.log('successfully added new item...');
}

function checkForValidInputs() {
    console.log('checking for valid inputs...');
    //TODO: Write rules for checking valid inputs.
}

// Listeners
document.getElementById('logout-btn').addEventListener('click', handleLogOut, false);
document.getElementById('agregar-btn').addEventListener('click', handleAddItem, false);