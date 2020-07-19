const database = require("../database");
class ClubModel {
  constructor() {
    if (this.instance) return this.instance;
    ClubModel.instance = this;
  }
  get() {
    return database.getList("clubs");
  }

  getById(id) {
    return database.get("clubs", id);
  }

  create(club) {
    return database.create("clubs", club);
  }

  delete(id) {
    return database.delete("clubs", id);
  }

  update(id, todo) {
    return database.set("clubs", id, club);
  }
}

module.exports = new ClubModel();
