const API_PATH = "/api";
const mongo = require("../../db/connect");
const { postFilm, getFilms, getFilmById, deleteFilmById, updateFilmById } = require("../../db/films");
module.exports = (app) => {
    app.get(`${API_PATH}/films`, async (req, res) => {
        const films = await getFilms();
        res.json(films);
    });
    app.get(`${API_PATH}/films/:id`, async (req, res) => {
        const id = req.params.id;
        const film = await getFilmById(id);
        res.json(film);
    });
    app.post(`${API_PATH}/film`, async (req, res) => {
        const film = JSON.parse(req.body.film);
        if (film) {
            const resp = await postFilm(film);
            console.log(resp);
            return res.json(resp);
        }
        res.status(400).send({ reason: "No film sent." });
    });
    app.delete(`${API_PATH}/film/:id`, async (req, res) => {
        const id = req.params.id;
        if (id) {
            const resp = await deleteFilmById(id);
            return res.status(200).json(resp);
        }
        res.status(400).send({ reason: "No film sent." });
    });
    app.put(`${API_PATH}/film/`, async (req, res) => {
        const film = JSON.parse(req.body.film);
        if (film) {
            console.log(film);
            const resp = await updateFilmById(film);
            return res.json(resp);
        }
        res.status(400).send({ reason: "No film sent." });
    })
}