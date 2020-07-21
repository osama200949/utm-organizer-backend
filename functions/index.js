// const functions = require("firebase-functions");
// const express = require("express");
// const app = express();
// const todosRouter = require("./api/controllers/todos_controller");

// app.use(express.json());
// app.use("/v1/todos", todosRouter);

// exports.api = functions.https.onRequest(app);

// // To handle "Function Timeout" exception
// exports.functionsTimeOut = functions.runWith({
//   timeoutSeconds: 300,
// });

// exports.setupdb = functions.https.onRequest(require('./setup_database'))

const functions = require("firebase-functions");
// exports.api = functions.https.onRequest((req, res) => {
//     res.json({ message: "Hello from api" });
// });
const express = require("express");
const app = express();
const coursesRouter = require("./api/controllers/courses_controller");

app.use(express.json());
app.use(coursesRouter);

exports.majors = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300,
});

exports.setupdb = functions.https.onRequest(require("./setup_database"));