const CoursesModel = require("../models/courses_model");
const express = require("express");
const router = express.Router();

// Get all Courses
router.get("/", async (req, res, next) => {
    try {
        const result = await CoursesModel.get();
        return res.json(result);
    } catch (e) {
        return next(e);
    }
});

// Get all Selected Courses
router.get("/selectedCourses", async (req, res, next) => {
    try {
        const result = await CoursesModel.getSelectedCourses();
        return res.json(result);
    } catch (e) {
        return next(e);
    }
});

// Get all user Selected Courses
router.get("/:id/userSelectedCourses", async (req, res, next) => {
    try {
        const result = await CoursesModel.getUserSelectedCourse();
        return res.json(result);
    } catch (e) {
        return next(e);
    }
});

// Add a Selected Course
router.post("/selectedCourses", async (req, res, next) => {
    try {
        const result = await CoursesModel.addSelectedCourse(req.body);
        if (!result) return res.sendStatus(409);
        return res.status(201).json(result);
    } catch (e) {
        return next(e);
    }
});

// Update a Selected Course
router.patch("/selectedCourses/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = JSON.parse(req.body);

        const doc = await CoursesModel.getSelectedCourseById(id);
        if (!doc) return res.sendStatus(404);

        console.log(data);

        // Merge existing fields with the ones to be updated

        Object.keys(data).forEach((key) => {
            doc[key] = data[key];
        });

        const updateResult = await CoursesModel.updateSelectedCourse(id, doc);
        if (!updateResult) return res.sendStatus(404);

        return res.json(doc);
    } catch (e) {
        return next(e);
    }
});

router.delete("/selectedCourses/:id", async (req, res, next) => {
    try {
        const result = await CoursesModel.deleteSelectedCourse(req.params.id);
        if (!result) return res.sendStatus(404);
        return res.sendStatus(200);
    } catch (e) {
        return next(e);
    }
});

router.delete("/selectedCourses", async (req, res, next) => {
    try {
        const result = await CoursesModel.deleteAllSelectedCourses();
        if (!result) return res.sendStatus(404);
        return res.sendStatus(200);
    } catch (e) {
        return next(e);
    }
});

module.exports = router;