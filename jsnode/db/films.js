const mongo = require("./connect");
const { DB_NAME } = require("../db/config");
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
        const resp = db.collection(collection).find({ _id: objectId }).toArray()
        return resp;
    },
    deleteFilmById: (_id) => {
        let objectId = new ObjectID(_id);
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection(collection).deleteOne({ _id: objectId });
        return resp;
    },
    updateFilmById: (film) => {
        let objectId = new ObjectID(film._id);
        console.log(film._id);
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection(collection).updateOne({ _id: objectId },
            { $set: { film } }, { upsert:true});
        return resp;
    }
}