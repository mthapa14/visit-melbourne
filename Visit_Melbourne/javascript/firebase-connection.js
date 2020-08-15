// Your web app's Firebase configuration
var Config = {
    apiKey: "AIzaSyAE3SV9XsZQv8VHCiJ_6RZucobP52mOOr4",
    authDomain: "visit-melbourne-contact.firebaseapp.com",
    databaseURL: "https://visit-melbourne-contact.firebaseio.com",
    projectId: "visit-melbourne-contact",
    storageBucket: "visit-melbourne-contact.appspot.com",
    messagingSenderId: "722836221096"
};
// Initialize Firebase
firebase.initializeApp(Config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    console.log(name);
    // Save message
    saveMessage(name, email, message);
        // Show alert
        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 5 seconds
        setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        }, 5000);
    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}