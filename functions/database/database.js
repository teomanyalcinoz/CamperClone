const admin = require("firebase-admin");
var serviceAccount = require("../resources/camperss.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://camper-f60d4.firebaseio.com"
});

module.exports = admin;
const db = admin.firestore();