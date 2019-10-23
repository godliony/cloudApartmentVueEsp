const config = require('./config.json')
const firebase = require("firebase-admin");
firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: config.databaseURL
});
const db = firebase.firestore();
module.exports = db