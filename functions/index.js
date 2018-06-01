/* eslint-disable */
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestSomeApp = require('./request_someapp');
// 4aXYrM0Vem34v31VzP92XMyXwH39CBermUDbC5nu
// +44 1784 605447

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://someapp-7f2f1.firebaseio.com"
});




exports.createUser = functions.https.onRequest(createUser);
exports.requestSomeApp = functions.https.onRequest(requestSomeApp);


