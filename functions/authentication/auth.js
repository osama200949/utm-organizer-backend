const database = require("../api/database");

exports.signUp = functions.https.onCall(async (data, context) => {
  var errorMessage;
  var isError = false;
  const user = await auth
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
    await firestore
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
