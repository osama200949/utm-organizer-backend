const functions = require("firebase-functions");

const express = require("express");
const app = express();
const coursesRouter = require("./api/controllers/courses_controller");

app.use(express.json());
app.use(coursesRouter);

exports.majors = functions.https.onRequest(app);

exports.setupdbMajors = functions.https.onRequest(require("./setup_database"));

const database = require("./api/database");
const auth = require("./authentication/auth");
const clubsRouter = require("./api/controllers/clubs_controller");

app.use(express.json());
app.use("/v1/clubs", clubsRouter);

const meetingsRouter = require("./api/controllers/meetings_controller");
app.use("/v1/meetings", meetingsRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300,
});

exports.setupdbClubs = functions.https.onRequest(
    require("./setup_database_clubs")
);

exports.signUp = functions.https.onCall(auth.createUser);
exports.updateUser = functions.https.onCall(auth.updateUser);