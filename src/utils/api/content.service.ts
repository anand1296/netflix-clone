// movieService.ts
import { ContentList, VideoList } from '../../types/content.type';
import { APP_CONSTANTS } from '../constants';
import ApiService from './api.service';

const MOVIE_API_BASE_URL = APP_CONSTANTS.API.TMDB.BASE_URL;
const API_VERSION = APP_CONSTANTS.API.TMDB.VERSION;

const contentService = ApiService(`${MOVIE_API_BASE_URL}/${API_VERSION}`);

export const getNowPlayingContent = async (): Promise<ContentList> => {
    try {
        const contentList =
            await contentService.get<ContentList>('/now_playing');
        return contentList;
    } catch (error) {
        throw error;
    }
};

export const getVideosById = async (
    id: string,
    type: 'movie' | 'tv_series'
) => {
    try {
        // Example: Calling GET /movies/{id} endpoint
        const movie = await contentService.get<VideoList>(
            `/${type}/${id}/videos`
        );
        return movie;
    } catch (error) {
        throw error;
    }
};

export default contentService;
