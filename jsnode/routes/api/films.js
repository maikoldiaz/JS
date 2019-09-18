const API_PATH = "/api";
const mongo = require("../../db/connect");
const { postFilm, getFilms, getFilmById } = require("../../db/films");
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
    })
}