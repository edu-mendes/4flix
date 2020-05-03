import { BaseDB } from "./baseDB";
import { Series } from "../business/entities/series";
import { SerieGateway } from "../business/gateway/SerieGateway";
import { Episodes } from "../business/entities/episodes";

class SeriesModel {
    constructor(
        public id: string,
        public title: string,
        public debut_date: Date,
        public sinopse: string,
        public link: string,
        public image: string,
        public episodes: Episodes[]) { }
}

class EpisodeModel {
    constructor(
        public id: string,
        public serie_id: string,
        public title: string,
        public sinopse: string,
        public link: string,
        public picture: string,
        public length: number) { }
}

class EpisodeEntityMapper {
    entityToModel(entity: Episodes, seriesId: string): EpisodeModel {
        return {
            id: entity.getId(),
            serie_id: seriesId,
            title: entity.getTitle(),
            sinopse: entity.getSinopse(),
            link: entity.getLink(),
            picture: entity.getPicture(),
            length: entity.getLength()
        };
    }

    modelToEntity(model: EpisodeModel): Episodes {
        return new Episodes(model.id, model.title, model.length, model.link, model.picture, model.sinopse);
    }

}
export class SeriesEntityMapper {
    entityToModel(entity: Series): SeriesModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            sinopse: entity.getSinopse(),
            link: entity.getLink(),
            image: entity.getImage(),
            debut_date: entity.getDebut_date(),
            episodes: entity.getEpisodes()
        };
    }
    modelToEntity(model: EpisodeModel): Episodes {
        return new Episodes(model.id, model.title, model.length, model.link, model.picture, model.sinopse);
    }
}

export class SeriesDB extends BaseDB implements SerieGateway {
    private seriesTableName = "series";
    private seriesEntityMapper: SeriesEntityMapper;
    private episodeEntityMapper: EpisodeEntityMapper;

    constructor() {
        super()
        this.seriesEntityMapper = new SeriesEntityMapper();
        this.episodeEntityMapper = new EpisodeEntityMapper();
    }
    


    public async saveSerie(series: Series, episodes: Episodes[]): Promise<boolean> {
        try {
            await this.connection('series').insert(this.seriesEntityMapper.entityToModel(series));
            for (let episode of episodes) {
                await this.connection('episode').insert(this.episodeEntityMapper.entityToModel(episode, series.getId()));
            }
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    private mapDbFilmToFilm(input?: any): Series | undefined {
        return (
          input &&
          new Series(
            input.id,
            input.title,
            input.debut_date,
            input.sinopse,
            input.length,
            input.image,
            input.link,
            input.episodes
          )
        );
      }

    public async getSerieById(id: string): Promise<Series | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.seriesTableName} WHERE id='${id}'
        `);
        return this.mapDbFilmToFilm(result[0][0])
    }
 
     
}