const db = require("./api/database");
const courses_data = require("./api/models/data.json");

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ["majors"];
    collections.forEach(async(collection) => await deleteCollection(collection));

    // Add documents to the todos collection
    await addDocuments("majors", courses_data);

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