const mongo = require("./connect");
const { DB_NAME } = require("../db/config");
const films = require("../resources/films");
const collection = "films";
const ObjectID = require('mongodb').ObjectID

module.exports = {
    postFilm: function (film) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection(collection).insertOne(film);
        return resp;
    },
    getFilms: () => {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection(collection).find({}).toArray();
        return resp;
    },
    getFilmById: (_id) => {
        let objectId = new ObjectID(_id);
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection(collection).find({_id:objectId}).toArray()
        return resp;
    }
}