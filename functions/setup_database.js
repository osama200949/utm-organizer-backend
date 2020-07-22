const db = require("./api/database");
const courses_data = require("./api/models/data.json");

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ["majors", "selectedCourses"];
    collections.forEach(async(collection) => await deleteCollection(collection));

    // Add documents to the majors collection
    addDocuments("majors", courses_data);

    res.send("Setting Up Database.... Done ");
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection);
    const docs = await cref.listDocuments();
    docs.forEach((doc) => doc.delete());
}

function addDocuments(collection, docs) {
    docs.forEach(async(doc) => await db.create(collection, doc));
}

module.exports = setupDatabase;