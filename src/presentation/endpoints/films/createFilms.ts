import { Request, Response } from "express";
import { CreateFilmsUC } from "../../../business/usecase/films/createFilms";
import { FilmsDB } from "../../../data/filmsDB";

export const createFilmsEndpoint = async (req: Request, res: Response) => {
    try {
      const createFilmsUC = new CreateFilmsUC(new FilmsDB());
      const result = await createFilmsUC.execute({
        title: req.body.title,
        debut_date: req.body.debut_date,
        sinopse: req.body.sinopse,
        link: req.body.link,
        length: req.body.length,
        image: req.body.image
      });
  
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({
        message: err.message
      });
    }
  }; 
  