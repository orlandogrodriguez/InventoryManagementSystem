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

console.log('about to do a db query');

var query = firebase.database().ref("items").orderByKey();
query.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            // key will be "ada" the first time and "alan" the second time
            var key = childSnapshot.key;
            console.log(key);
            // childData will be the actual contents of the child
            var childData = childSnapshot.val();
            console.log(childData);

            var tableBodyContent = document.getElementById('table-body');
            tableBodyContent.innerHTML = tableBodyContent.innerHTML +
                "<tr><td>" + childData.Guarderia + "</td><td>" + childData.Articulo + "</td>" +
                "<td>" + childData.Unidad + "</td><td>" + childData.Cantidad +"</td></tr>";
        });
    });