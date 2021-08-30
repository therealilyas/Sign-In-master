const config = {
    apiKey: "AIzaSyBcJ85ybWGVyykl072LqGCEBLVXGxbnsHk",
    authDomain: "login-3a701.firebaseapp.com",
    databaseURL: "https://login-3a701-default-rtdb.firebaseio.com",
    projectId: "login-3a701"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

db.settings({
    timestampsInSnapshots: true
});

export default {
    functions,
    config,
    auth,
    db,
}