import { BaseDB } from "./baseDB";
import { Films } from "../business/entities/films";


export class FilmsDB extends BaseDB {
    private filmsTableName = "films";
    private seriesTableName = "series";

    

    public async createFilms(films: Films): Promise<void>{
        await this.connection.raw(`
        INSERT INTO ${
            this.filmsTableName
          } (id, title, debut_date, sinopse, link, length, image)
          VALUES(
          '${films.getId()}',
          '${films.getTitle()}',
          '${films.getDebut_date()}',
          '${films.getSinopse()}',
          '${films.getLink()}',
          '${films.getLength()}',
          '${films.getImage()}'
          );
        `)
    }
 
    private mapDbFilmToFilm(input?: any): Films | undefined {
        return (
          input &&
          new Films(
            input.id,
            input.title,
            input.debut_date,
            input.sinopse,
            input.link,
            input.length,
            input.image
          )
        );
      }

    public async getFilmsById(id: string): Promise<Films | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.filmsTableName} WHERE id='${id}'
        `);
        return this.mapDbFilmToFilm(result[0][0])
    }

}