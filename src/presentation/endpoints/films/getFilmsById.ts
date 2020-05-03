import { Request, Response } from "express";
import { GetFilmsByIdUC } from "../../../business/usecase/films/getFilmsById";
import { FilmsDB } from "../../../data/filmsDB";

export const getFilmsByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getFimlsByIdUC = new GetFilmsByIdUC(new FilmsDB());
        const result = await getFimlsByIdUC.execute({
            id: req.params.id
        });

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });        
    }
}