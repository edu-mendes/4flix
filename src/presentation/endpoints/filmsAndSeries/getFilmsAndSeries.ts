import { Request, Response } from "express";
import { FilmsAndSeriesDB } from "../../../data/filmsAndSeriesDB";
import { GetFilmsAndSeriesUC } from "../../../business/usecase/filmsAndSeries/getFilmsAndSeries";

export const getFilmsAndSeriesEndpoint = async (req: Request, res: Response) => {
    try {
        const getFimlsAndSeriesUC = new GetFilmsAndSeriesUC(new FilmsAndSeriesDB());
        const result = await getFimlsAndSeriesUC.execute({
            query: req.body.query,
            minLength: req.body.minLength,
            maxLength: req.body.maxLength
        });

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });        
    }
}