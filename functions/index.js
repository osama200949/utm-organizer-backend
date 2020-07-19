const functions = require("firebase-functions");
const express = require("express");
const app = express();
const database = require("./api/database");
const todosRouter = require("./api/controllers/todos_controller");

app.use(express.json());
app.use("/v1/todos", todosRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});

exports.setupdb = functions.https.onRequest(require("./setup_database"));

exports.signUp = functions.https.onCall(async (data, context) => {
  var errorMessage;
  var isError = false;
  const user = await database.auth
    .createUser({
      email: data.email,
      password: data.password,
    })
    .then()
    .catch((err) => {
      isError = true;
      errorMessage = err.message;
    });

  if (user) {
    await database.firestore
      .collection("users")
      .doc(user.uid)
      .set(
        { fullName: data.fullName, email: data.email, gender: data.gender },
        { merge: true }
      );
  }

  return {
    isError: isError,
    repeat_message: errorMessage,
    fullName: data.fullName,
    gender: data.gender,
    email: data.email,
    password: data.password,
  };
});
