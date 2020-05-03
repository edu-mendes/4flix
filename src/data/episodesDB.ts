import { BaseDB } from "./baseDB";
import { Episodes } from "../business/entities/episodes";

export class EpisodesDB extends BaseDB {
    private episodesTableName = "episodes";

    public async createEpisodes(episodes: Episodes): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${
                this.episodesTableName
            }(id, title, length, link, sinopse, picture)
            VALUES(
                '${episodes.getId()}',
                '${episodes.getTitle()}',
                '${episodes.getLength()}',
                '${episodes.getLink()}',
                '${episodes.getSinopse()}',
                '${episodes.getpicture()}'
            );
        `)
    }

    private mapDbEpisodesToEpisodes(input?: any): Episodes | undefined {
        return (
          input &&
          new Episodes(
            input.id,
            input.title,
            input.debut_date,
            input.sinopse,
            input.length,
            input.image
          )
        );
      }

    public async getEpisodesById(id: string): Promise<Episodes | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.episodesTableName} WHERE id='${id}'
        `);
        return this.mapDbEpisodesToEpisodes(result[0][0])
    }

}