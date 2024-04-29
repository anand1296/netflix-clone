import { APP_CONSTANTS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import useFetch from '../../utils/hooks/useFetch';
import VideoBackground from '../../components/ContentPromo/VideoBackground';
import { ContentPromo } from '../../components/Content/ContentPromo';
import useMock from '../../utils/hooks/useMock';
import { ContentList } from '../../types/content.type';
import CardList from '../../components/Content/CardList';

const Browse = () => {
    const dispatch = useDispatch();

    const { data, loading, error } = useFetch<ContentList>(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/movie/now_playing?page=1`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );
    console.log(data, loading, error);

    // const data = useMock('now_playing');
    // console.log(data);

    return (
        <>
            {!!data?.results?.length && <ContentPromo data={data.results[0]} />}
            {/* Card rows x n */}
            <CardList />
        </>
    );
};

export default Browse;
