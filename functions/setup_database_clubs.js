const db = require("./api/database");

async function setupDatabase(req, res, next) {
  // To delete all the collections
  const collections = ["clubs"];
  collections.forEach(async (collection) => await deleteCollection(collection));

  // Add documents to the todos collection
  await addDocuments("clubs", [
    {
      clubId: "Prepare proposal for the new project",
      clubName: "InsideUTM",
      clubDescription:
        "Every year over 5000 students graduate but most of them don’t utilize all the resources insideUTM (excuse the pun). InsideUTM is here to bring everything over a campus wide radius to your fingertips",
      imagesPath:
        "https://pbs.twimg.com/profile_images/1241143363564261377/CdG8eUSL_400x400.jpg",
      clubPhone: "00605337899",
      facebookPath: "facebook.com/InsideUTM/",
      categoryClub: "Sport",
      uid: "admin",
    },
  ]);

  res.send("Setting Up Database.... Done ");
}

async function deleteCollection(collection) {
  const cref = db.firestore.collection(collection);
  const docs = await cref.listDocuments();
  docs.forEach((doc) => doc.delete());
}

function addDocuments(collection, docs) {
  docs.forEach((doc) => db.create(collection, doc));
}

module.exports = setupDatabase;
