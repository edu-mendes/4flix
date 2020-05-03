import { Request, Response } from "express";
import { EpisodesDB } from "../../../data/episodesDB";
import { GetEpisodesByIdUC } from "../../../business/usecase/episodes/getEpisodesById";

export const getEpisodesByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getEpisodesByIdUC = new GetEpisodesByIdUC(new EpisodesDB());
        const result = await getEpisodesByIdUC.execute({
            id: req.params.id
        });

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });        
    }
}