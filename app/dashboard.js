var config = {
    apiKey: "AIzaSyCaXAHOIuy7orbovHaNLTcpBHU7SfhPgyQ",
    authDomain: "inventorymanagementsyste-4ff37.firebaseapp.com",
    databaseURL: "https://inventorymanagementsyste-4ff37.firebaseio.com",
    projectId: "inventorymanagementsyste-4ff37",
    storageBucket: "inventorymanagementsyste-4ff37.appspot.com",
    messagingSenderId: "719121174258"
};
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
        document.getElementById('user-display-name').innerHTML = user.displayName;
    } else {
        console.log('no user signed in');
        location.replace('index.html');
    }
});

function handleLogOut() {
    firebase.auth().signOut().then(function() {
        console.log('log out successfull...');
        location.replace('index.html');
    }).error(function() {

    });
}

document.getElementById('logout-btn').addEventListener('click', handleLogOut, false);