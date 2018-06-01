/* eslint-disable */
const twilio = require('twilio');


const accountSid = 'AC787c3e262a0e32d78beb519a8815b368';
const authToken  = '324dc45b2c1913bc1aef9c01446f8076';

module.exports = new twilio.Twilio(accountSid, authToken);