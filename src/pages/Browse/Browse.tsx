import { APP_CONSTANTS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import useFetch from '../../utils/hooks/useFetch';
import VideoBackground from '../../components/ContentPromo/VideoBackground';
import { ContentPromo } from '../../components/Content/ContentPromo';
import useMock from '../../utils/hooks/useMock';
import { ContentList } from '../../types/content.type';
import CardList from '../../components/Content/CardList';
import useFetchAll from '../../utils/hooks/useFetchAll';

const Browse = () => {
    // const dispatch = useDispatch();
    console.log('re-rendering Browse');
    const {
        data: nowPlayingDetails,
        loading,
        error,
    } = useFetch<ContentList>(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/movie/now_playing?page=1`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );
    console.log(nowPlayingDetails, loading, error);

    // const contentList: Record<string, any[]> | null = useFetchAll([
    //     {
    //         name: 'popular_movies',
    //         url: new URL(
    //             `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/${APP_CONSTANTS.API.TMDB.CONTENT_TYPE.MOVIE}/${APP_CONSTANTS.API.TMDB.ENDPOINTS.POPULAR}`
    //         ),
    //     },
    //     {
    //         name: 'upcoming_movies',
    //         url: new URL(
    //             `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/${APP_CONSTANTS.API.TMDB.CONTENT_TYPE.MOVIE}/${APP_CONSTANTS.API.TMDB.ENDPOINTS.UPCOMING}`
    //         ),
    //     },
    // ]);

    const { data: popularMovies } = useFetch<ContentList>(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/${APP_CONSTANTS.API.TMDB.CONTENT_TYPE.MOVIE}/${APP_CONSTANTS.API.TMDB.ENDPOINTS.POPULAR}`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );

    console.log('popular-movies', popularMovies);

    const { data: upcomingMovies } = useFetch<ContentList>(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/${APP_CONSTANTS.API.TMDB.CONTENT_TYPE.MOVIE}/${APP_CONSTANTS.API.TMDB.ENDPOINTS.UPCOMING}`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );

    console.log('upcoming-movies', upcomingMovies);

    const { data: topRatedMovies } = useFetch<ContentList>(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/${APP_CONSTANTS.API.TMDB.CONTENT_TYPE.MOVIE}/${APP_CONSTANTS.API.TMDB.ENDPOINTS.TOP_RATED}`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );

    console.log('topRated-movies', topRatedMovies);

    // const data = useMock('now_playing');
    // console.log(data);

    return (
        <>
            {!!nowPlayingDetails?.results?.length && (
                <ContentPromo data={nowPlayingDetails.results[0]} />
            )}
            {/* Card rows x n */}
            {!!popularMovies?.results.length && (
                <CardList
                    title="Popular Movies"
                    contentList={popularMovies.results}
                />
            )}
            {!!upcomingMovies?.results.length && (
                <CardList
                    title="Upcoming Movies"
                    contentList={upcomingMovies.results}
                />
            )}
            {!!topRatedMovies?.results.length && (
                <CardList
                    title="Top Rated Movies"
                    contentList={topRatedMovies.results}
                />
            )}
        </>
    );
};

export default Browse;
