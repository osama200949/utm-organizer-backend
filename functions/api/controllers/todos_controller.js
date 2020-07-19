const todosModel = require("../models/todos_model");
const admin = require("firebase-admin"); // To access Firestore API

const express = require("express");
const router = express.Router();

function isAuth(req, res, next) {
  var uid;
  admin
    .auth()
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

// Get all todos
router.get("/", isAuth, async (req, res, next) => {
  console.log("finally");
  try {
    const result = await todosModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get one todo
router.get("/:id", async (req, res, next) => {
  try {
    const result = await todosModel.getById(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Create a new todo
router.post("/", async (req, res, next) => {
  try {
    const result = await todosModel.create(req.body);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});

// Delete a todo
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await todosModel.delete(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.sendStatus(200);
  } catch (e) {
    return next(e);
  }
});

// Update a todo
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const doc = await todosModel.getById(id);
    if (!doc) return res.sendStatus(404);

    // Merge existing fields with the ones to be updated
    Object.keys(data).forEach((key) => (doc[key] = data[key]));

    const updateResult = await todosModel.update(id, doc);
    if (!updateResult) return res.sendStatus(404);

    return res.json(doc);
  } catch (e) {
    return next(e);
  }
});

// Replace a todo
router.put("/:id", async (req, res, next) => {
  try {
    const updateResult = await todosModel.update(req.params.id, req.body);
    if (!updateResult) return res.sendStatus(404);

    const result = await todosModel.getById(req.params.id);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
