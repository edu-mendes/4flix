import express, { Request, Response } from "express";
import { createFilmsEndpoint } from "./endpoints/films/createFilms";
import { createSeriesEndpoint } from "./endpoints/series/createSeries";
import { createEpisodesEndpoint } from "./endpoints/episodes/createEpisodes";
import { getFilmsByIdEndpoint } from "./endpoints/films/getFilmsById";
import { getFilmsAndSeriesEndpoint } from "./endpoints/filmsAndSeries/getFilmsAndSeries";
import { getSerieByIdEndpoint } from "./endpoints/series/getSerieById";
import { getEpisodesByIdEndpoint } from "./endpoints/episodes/getEpisodesById";

const app = express();
app.use(express.json());

app.post("/create/film", createFilmsEndpoint);
app.post("/create/serie", createSeriesEndpoint);
app.post("/create/episode", createEpisodesEndpoint);
app.get("/films/:id", getFilmsByIdEndpoint);
app.get("/series/:id", getSerieByIdEndpoint);
app.get("/episodes/:id", getEpisodesByIdEndpoint);
app.post("/filmsAndSeries", getFilmsAndSeriesEndpoint);


export default app;
