import { FilmsDB } from "../../../data/filmsDB";
import { EpisodesDB } from "../../../data/episodesDB";

export class GetEpisodesByIdUC {
    constructor(private db: EpisodesDB) {}

    public async execute(input: GetEpisodesByIdUCInput): Promise<GetEpisodesByIdUCOutput>{

        const episodes = await this.db.getEpisodesById(input.id);

        if(!episodes) {
            throw new Error("Film not found");
        }
        return{
            id: episodes.getId(),
            title: episodes.getTitle(),
            sinopse: episodes.getSinopse(),
            length: episodes.getLength(),
        }
    }
}

export interface GetEpisodesByIdUCInput {
    id: string;
}

export interface GetEpisodesByIdUCOutput {
    id: string;
    title: string,
    sinopse: string,
    length: number
}