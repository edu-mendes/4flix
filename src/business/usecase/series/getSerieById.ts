import { SeriesDB } from "../../../data/seriesDB";

export class GetSerieByIdUC {
    constructor(private db: SeriesDB) {}

    public async execute(input: GetSerieByIdUCInput): Promise<GetSerieByIdUCOutput>{

        const serie = await this.db.getSerieById(input.id);

        if(!serie) {
            throw new Error("Serie not found");
        }

        return{
            id: serie.getId(),
            title: serie.getTitle(),
            debut_date: serie.getDebut_date(),
            sinopse: serie.getSinopse(),
            length: serie.getLength(),
            image: serie.getImage()
        }
    }
}

export interface GetSerieByIdUCInput {
    id: string;
}

export interface GetSerieByIdUCOutput {
    id: string;
    title: string,
    debut_date: Date,
    sinopse: string,
    length: number,
    image: string
}