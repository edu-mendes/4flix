import { BaseDB } from "./baseDB";
import { FilmsAndSeries } from "../business/entities/filmsAndSeries";

export class FilmsAndSeriesDB extends BaseDB {
    private filmsTableName = "films";
    private seriesTableName = "series";

    public async getFilmAndSerie(query: string, maxLength: number, minLength: number = 0): Promise<FilmsAndSeries  | undefined> {
        let getQuery = maxLength
        ?`
        SELECT id, title, image, sinopse 
        FROM  ${this.filmsTableName}
        WHERE title like '%${query}%' or sinopse like '%${query}%' and length < ${minLength}
        union all
        select id, title, image, sinopse
        from ${this.seriesTableName}
        WHERE title like '%${query}%' or sinopse like '%${query}%'
        ;`
        : `
        SELECT id, title, image, sinopse 
        FROM  ${this.filmsTableName}
        WHERE title like '%${query}%' or sinopse like '%${query}%' and length > ${minLength}
        union all
        select id, title, image, sinopse
        from ${this.seriesTableName}
        WHERE title like '%${query}%' or sinopse like '%${query}%'
        ;`;

        const result = await this.connection.raw(getQuery);

        return  new FilmsAndSeries(
              result[0][0].id,
              result[0][0].title,
              result[0][0].sinopse,
              result[0][0].image
          );
      }

}