const database = require("../api/database");
const functions = require("firebase-functions");
const { signUp } = require("..");

function isAuth(req, res, next) {
  var uid;
  database.auth
    .verifyIdToken(req.headers.authorization)
    .then((decodedToken) => {
      uid = decodedToken.uid;
      console.log(uid);
      isUser = true;
      return;
    })
    .catch((error) => {
      throw res.status(407).json("you don't have permission laa");
    });
  next();
  return;
}

async function createUser(data, context) {
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
      console.log(errorMessage);
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
}

module.exports = createUser;
