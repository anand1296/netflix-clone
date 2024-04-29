export type ContentList = {
    dates: Dates;
    page: number;
    results: Array<ContentDetails>;
    total_pages: number;
    total_results: number;
};

type Dates = {
    maximum: Date;
    minimum: Date;
};

export type ContentDetails = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type VideoList = {
    id: number;
    results: Array<VideoDetails>;
};

export type VideoDetails = {
    iso_639_1: ISO639_1;
    iso_3166_1: ISO3166_1;
    name: string;
    key: string;
    site: Site;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
};

enum ISO3166_1 {
    Us = 'US',
}

enum ISO639_1 {
    En = 'en',
}

enum Site {
    YouTube = 'YouTube',
}
