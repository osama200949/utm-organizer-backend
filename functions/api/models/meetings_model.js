const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class MeetingModel {
    constructor() {
        if (this.instance) return this.instance;
        MeetingModel.instance = this;
    }

    clearTimetable(id) { return database.clearTimetable('meetings',id) }  // Clear all the courses from the meetings collection
    
    getListById(id) { return database.getListById('meetings', id) }  // List with meetings according to user

    get() { return database.getList('meetings') }

    getById(id) { return database.get('meetings', id) }

    create(meeting) { return database.create('meetings', meeting) }

    delete(id) { return database.delete('meetings', id) }

    update(id, meeting) { return database.set('meetings', id, meeting) }
}

module.exports = new MeetingModel();