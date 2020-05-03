import { Request, Response } from "express";
import { CreateSeriesUC } from "../../../business/usecase/series/createSeries";
import { SeriesDB } from "../../../data/seriesDB";
import { CreateEpisodesUC } from "../../../business/usecase/episodes/createEpisodes";
import { EpisodesDB } from "../../../data/episodesDB";

export const createSeriesEndpoint = async (req: Request, res: Response) => {
    try {
        const createSeriesUC = new CreateSeriesUC(new SeriesDB());
        const result = await createSeriesUC.execute({
            title: req.body.title,
            debut_date: req.body.debut_date,
            image: req.body.image,
            sinopse: req.body.sinopse,
            length: req.body.length,
            link: req.body.link,
            episodes: req.body.episodes
        })

res.status(200).send(result);
    } catch (err) {
    res.status(err.errorCode || 400).send({
        message: err.message
    });
}
} 