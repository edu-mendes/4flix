import { v4 } from "uuid"
import { Episodes } from "../../entities/episodes";
import { EpisodesDB } from "../../../data/episodesDB";

export class CreateEpisodesUC {
    constructor(private db: EpisodesDB) {}

    public async execute(input: CreateEpisodesUCInput): Promise<CreateEpisodesUCOutput> {
        const id = v4();

        const epidodes = new Episodes(
            id,
            input.title,
            input.length,
            input.link,
            input.sinopse,
            input.picture
        );

        await this.db.createEpisodes(epidodes)

        return {
            message: "Episodes created successfully"
        }
    }
}

export interface CreateEpisodesUCInput {
    title: string,
    length: number,
    link: string,
    sinopse: string,
    picture: string
}

export interface CreateEpisodesUCOutput {
    message: string;
}