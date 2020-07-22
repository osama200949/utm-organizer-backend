const functions = require("firebase-functions");
const express = require("express");
const app = express();
const todosRouter = require("./api/controllers/todos_controller");
const meetingsRouter = require("./api/controllers/meetings_controller");

app.use(express.json());
app.use("/v1/todos", todosRouter);
app.use("/v1/meetings", meetingsRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});

exports.setupdb = functions.https.onRequest(require('./setup_database'))


