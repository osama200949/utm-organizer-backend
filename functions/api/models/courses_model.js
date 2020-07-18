const database = require("../database");

class CourseModel {
    constructor() {
        if (this.instance) return this.instance;
        CourseModel.instance = this;
    }

    get() {
        return database.getList("years");
    }
}

module.exports = new CourseModel();