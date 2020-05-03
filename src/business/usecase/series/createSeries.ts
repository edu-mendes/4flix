import { Series } from "../../entities/series";
import { v4 } from "uuid";
import { SerieGateway } from "../../gateway/SerieGateway";
import { Episodes } from "../../entities/episodes";

export class CreateSeriesUC {
    private serieGateway: SerieGateway;

    constructor(serieGateway: SerieGateway) { 
        this.serieGateway = serieGateway
    }

    public async execute(input: CreateSeriesUCInput){
        const id = v4();

        if(input.episodes.length > 0){
            const episodies = input.episodes.map(ep => {
                return new Episodes(id,  ep.title, ep.length, ep.link, ep.sinopse, ep.picture)
            })

            const newSeries = new Series(id, input.title, input.debut_date,  input.image, input.sinopse, input.length, input.link, episodies);
            try {
                const result = await this.serieGateway.saveSerie(newSeries, episodies);
                return {
                    message: "Series created successfully"
                }
            }
            catch (err) {
                console.log(err);
            }
            // const series = new Series(
            //     id,
            //     input.title,
            //     input.debut_date,
            //     input.image,
            //     input.sinopse,
            //     input.length,
            //     input.episodes
            // );
    
            // if (!series.getId() ||
            //     !input.title ||
            //     !input.debut_date ||
            //     !input.image ||
            //     !input.sinopse ||
            //     !input.length ||
            //     !input.episodes
            // ) {
            //     throw new Error("Serie not found");
            // }
    
           
            // await this.serieGateway.saveSerie(series, ep);

        } else {
            throw new Error("Serie not found");
        }
    }
}

export interface CreateSeriesUCInput {
    title: string,
    debut_date: Date,
    image: string,
    sinopse: string,
    length: number,
    link: string,
    episodes: CreateEpisodesUCInput[]
}

export interface CreateEpisodesUCInput {
    title: string,
    length: number,
    link: string,
    sinopse: string,
    picture: string,
}

