const functions = require("firebase-functions");
const express = require("express");
const app = express();

const database = require("./api/database");
const auth = require("./authentication/auth");
const clubsRouter = require("./api/controllers/clubs_controller");

app.use(express.json());
app.use("/clubs", clubsRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});

exports.setupdb = functions.https.onRequest(require("./setup_database"));

exports.signUp = functions.https.onCall(require("./authentication/auth"));
