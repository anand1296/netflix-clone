import { useDispatch } from "react-redux";
import useFetch from "./useFetch";
import { APP_CONSTANTS } from "../constants";
import { addNowPlayingMovies } from "../store/movies.slice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const { data, loading, error } = useFetch(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/movie/now_playing?page=1`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );

    if(data) {
        dispatch(addNowPlayingMovies(data));
    }

    return { data, loading, error }
};

export default useNowPlayingMovies;
