const functions = require("firebase-functions");
const database = require("./api/database");
const auth = require("./authentication/auth");
const clubsRouter = require("./api/controllers/clubs_controller");
const meetingsRouter = require("./api/controllers/meetings_controller");
const coursesRouter = require("./api/controllers/courses_controller");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/v1/clubs", clubsRouter);
app.use("/v1/meetings", meetingsRouter);
app.use("/v1/majors", coursesRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});

exports.signUp = functions.https.onCall(auth.createUser);
exports.updateUser = functions.https.onCall(auth.updateUser);

exports.setupdbMajors = functions.https.onRequest(require("./setup_database"));
exports.setupdbClubs = functions.https.onRequest(
  require("./setup_database_clubs")
);
