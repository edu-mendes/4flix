import { Series } from '../entities/series';
import { Episodes } from '../entities/episodes';

export interface SerieGateway {
    saveSerie(Serie: Series, Episodes: Episodes[]): Promise<boolean>
};