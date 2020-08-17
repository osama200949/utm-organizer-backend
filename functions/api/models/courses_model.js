const database = require("../database");

class CourseModel {
    constructor() {
        if (this.instance) return this.instance;
        CourseModel.instance = this;
    }

    get() {
        return database.getList("majors");
    }

    getSelectedCourseById(id) {
        return database.get("selectedCourses", id);
    }

    getUserSelectedCourses(id) {
        return database.getUserSelectedCourses("selectedCourses", id);
    }

    getSelectedCourses() {
        return database.getList("selectedCourses");
    }

    addSelectedCourse(course) {
        return database.create("selectedCourses", course);
    }

    updateSelectedCourse(id, course) {
        return database.set("selectedCourses", id, course);
    }

    deleteSelectedCourse(id) {
        return database.delete("selectedCourses", id);
    }

    deleteAllSelectedCourses() {
        return database.deleteAll("selectedCourses");
    }
}

module.exports = new CourseModel();