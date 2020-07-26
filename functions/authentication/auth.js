const database = require("../api/database");
const functions = require("firebase-functions");

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
  var errorMessage = "No error";
  var gender = data.gender;
  var isError = false;
  var photoURL = "";

  gender === true
    ? (photoURL =
        "https://robohash.org/5203cae37e1e43982eb90d767816b806?set=set4&bgset=bg2&size=400x400")
    : (photoURL =
        "https://robohash.org/e24015b73e28939b10f39e2ab5f89430?set=set4&bgset=bg2&size=400x400");

  console.log(photoURL);
  const user = await database.auth
    .createUser({
      displayName: data.displayName,
      email: data.email,
      password: data.password,
      photoURL: photoURL,
    })
    .then()
    .catch((err) => {
      isError = true;
      errorMessage = err.message;
      console.log(errorMessage);
    });

  if (user) {
    await database.firestore.collection("users").doc(user.uid).set(
      {
        displayName: data.displayName,
        email: data.email,
        photoURL: photoURL,
        gender: data.gender,
        isDeleted: false,
      },
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




async function updateUser(data, context) {
  var errorMessage = "No error";
  var isError = false;

  const user = await database.auth
    .updateUser(data.uid, {
      displayName: data.displayName,
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
    await database.firestore.collection("users").doc(user.uid).set(
      {
        displayName: data.displayName,
        email: data.email,
        isDeleted: false,
      },
      { merge: true }
    );
  }

  return {
    isError: isError,
    repeat_message: errorMessage,
    displayName: data.displayName,
    email: data.email,
    password: data.password,
  };
}

module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
