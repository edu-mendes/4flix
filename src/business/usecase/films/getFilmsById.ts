import { FilmsDB } from "../../../data/filmsDB";

export class GetFilmsByIdUC {
    constructor(private db: FilmsDB) {}

    public async execute(input: GetFilmsByIdUCInput): Promise<GetFilmsByIdUCOutput>{

        const films = await this.db.getFilmsById(input.id);

        if(!films) {
            throw new Error("Film not found");
        }
        return{
            id: films.getId(),
            title: films.getTitle(),
            debut_date: films.getDebut_date(),
            sinopse: films.getSinopse(),
            link: films.getLink(),
            length: films.getLength(),
            image: films.getImage()
        }
    }
}

export interface GetFilmsByIdUCInput {
    id: string;
}

export interface GetFilmsByIdUCOutput {
    id: string;
    title: string,
    debut_date: Date,
    sinopse: string,
    link: string,
    length: number,
    image: string
}