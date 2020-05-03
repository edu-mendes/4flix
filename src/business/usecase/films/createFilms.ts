import { v4 } from "uuid";
import { Films } from "../../entities/films";
import { FilmsDB } from "../../../data/filmsDB"

export class CreateFilmsUC {
  constructor(private db: FilmsDB) {}

  public async execute(input: CreateFilmUCInput): Promise<CreateFilmUCOutput> {
    const id = v4();

    const films = new Films(
      id,
      input.title,
      input.debut_date,
      input.sinopse,
      input.link,
      input.length,
      input.image
    );
 
    await this.db.createFilms(films);

    return {
      message: "Film created successfully"
    };
  }
}

export interface CreateFilmUCInput {
  title: string;
  debut_date: Date;
  sinopse: string;
  link: string;
  length: number;
  image: string;
}

export interface CreateFilmUCOutput {
  message: string;
}
