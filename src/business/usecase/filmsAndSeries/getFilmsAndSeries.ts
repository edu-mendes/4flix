import { FilmsAndSeriesDB } from "../../../data/filmsAndSeriesDB";

export class GetFilmsAndSeriesUC {
    constructor(private db: FilmsAndSeriesDB) { }

    public async execute(input: GetFilmsAndSeriesUCInput): Promise<GetFilmsAndSeriesUCOutput> {

        const filmsAndSeries = await this.db.getFilmAndSerie(input.query, input.maxLength, input.minLength);

        
        if(!filmsAndSeries) {
            throw new Error("Film and Serie not found");
        }
        return {
            id: filmsAndSeries.getId(),
            title: filmsAndSeries.getTitle(),
            sinopse: filmsAndSeries.getSinopse(),
            image: filmsAndSeries.getImage()
        }
    }
}

interface AllFilmsAndSeries{
    all: GetFilmsAndSeriesUCOutput[];
}

export interface GetFilmsAndSeriesUCInput {
    query: string;
    minLength: number;
    maxLength: number;
}

export interface GetFilmsAndSeriesUCOutput {
    id: string;
    title: string,
    sinopse: string,
    image: string
}