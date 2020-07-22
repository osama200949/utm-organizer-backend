const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class MeetingModel {
    constructor() {
        if (this.instance) return this.instance;
        MeetingModel.instance = this;
    }

    get() { return database.getList('meetings') }

    getById(id) { return database.get('meetings', id) }

    create(meeting) { return database.create('meetings', meeting) }

    delete(id) { return database.delete('meetings', id) }

    update(id, meeting) { return database.set('meetings', id, meeting) }
}

module.exports = new MeetingModel();