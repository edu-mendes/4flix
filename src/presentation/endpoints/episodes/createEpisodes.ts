import { Request, Response } from "express";
import { CreateEpisodesUC } from "../../../business/usecase/episodes/createEpisodes";
import { EpisodesDB } from "../../../data/episodesDB";

export const createEpisodesEndpoint = async (req: Request, res: Response) => {
    try{
        const createEpisodesUC = new CreateEpisodesUC(new EpisodesDB());
        const result = await createEpisodesUC.execute({
            title: req.body.title,
            length: req.body.length,
            link: req.body.link,
            sinopse: req.body.sinopse,
            picture: req.body.picture
        })

        res.status(200).send(result);
    } catch (err){
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
}