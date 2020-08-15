const meetingsModel = require('../models/meetings_model')
const express = require('express')
const router = express.Router()

// Get all meetings
router.get('/', async (req, res, next) => {
    try {
        const result = await meetingsModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get one meeting
router.get('/:id', async (req, res, next) => {
    try {
        const result = await meetingsModel.getById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get all meetings that match the user
router.get('/:id/calendar', async (req, res, next) => {
    try {
        const result = await meetingsModel.getListById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})
// Get all courses in the calendar that match the user
router.get('/:id/courses', async (req, res, next) => {
    try {
        const result = await meetingsModel.getCourses(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Create a new meeting
router.post('/', async (req, res, next) => {
    try {
        const result = await meetingsModel.create(req.body)
        if (!result) return res.sendStatus(409)
        return res.status(201).json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Delete a meeting
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await meetingsModel.delete(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Delete all courses
router.delete('/:id/timetable', async (req, res, next) => {
    try {
        const result = await meetingsModel.clearTimetable(req.params.id)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Update a meeting
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const doc = await meetingsModel.getById(id)
        if (!doc) return res.sendStatus(404)

        // Merge existing fields with the ones to be updated
        Object.keys(data).forEach((key) => doc[key] = data[key])

        const updateResult = await meetingsModel.update(id, doc)
        if (!updateResult) return res.sendStatus(404)

        return res.json(doc)
    }
    catch (e) {
        return next(e)
    }
})

// Replace a meeting
router.put('/:id', async (req, res, next) => {
    try {
        const updateResult = await meetingsModel.update(req.params.id, req.body)
        if (!updateResult) return res.sendStatus(404)

        const result = await meetingsModel.getById(req.params.id)
        return res.json(result)

    }
    catch (e) {
        return next(e)
    }
})

module.exports = router