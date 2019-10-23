const functions = require('firebase-functions');
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require('./routes')(app)


const region = "asia-east2";
const runtimeOptions = {
    timeoutSeconds: 4,
    memory: '2GB'
};

exports.api = functions.region(region).runWith(runtimeOptions).https.onRequest(app)
