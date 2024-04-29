import React, { useState } from 'react';
import VideoBackground from '../ContentPromo/VideoBackground';
import VideoInfo from '../ContentPromo/VideoInfo';
import { useDispatch } from 'react-redux';
import { APP_CONSTANTS } from '../../utils/constants';
import useFetch from '../../utils/hooks/useFetch';
import { ContentDetails, VideoList } from '../../types/content.type';
import PosterBackground from '../ContentPromo/PosterBackground';
import Toggle from '../common/Toggle';

export const ContentPromo = ({ data }: { data: ContentDetails }) => {
    console.log(data);

    const {
        data: videoData,
        loading,
        error,
    } = useFetch<VideoList>(
        `${APP_CONSTANTS.API.TMDB.BASE_URL}/${APP_CONSTANTS.API.TMDB.VERSION}/movie/${data?.id}/videos?language=en-US`,
        APP_CONSTANTS.API.TMDB.OPTIONS
    );
    console.log(videoData, loading, error);

    const [showPromo, setShowPromo] = useState(false);

    const ytVideoId = videoData?.results
        .map((item: any) => {
            if (item.type.toLowerCase() === 'trailer') {
                return item.key;
            }
        })
        .filter((item: any) => item)[0];

    console.log(ytVideoId);

    const { poster_path } = data;

    return (
        <div className="relative top-0 left-0 right-0 mb-[20px] pb-[40%] mt-[-70px]">
            <div className="bg-[#000] h-[56.25vw] absolute w-full z-[-1] top-0">
                <div className="flex items-center absolute top-[15%] left-8 mx-4 z-10">
                    <Toggle
                        id="show-promo"
                        defaultValue="off"
                        onChange={(show) => setShowPromo(show)}
                        label="Autoplay promo"
                        labelBefore={true}
                    />
                </div>
                {showPromo
                    ? !!ytVideoId?.length && (
                          <VideoBackground ytVideoId={ytVideoId} />
                      )
                    : !!poster_path?.length && (
                          <PosterBackground posterPath={poster_path} />
                      )}
                {data && <VideoInfo data={data} />}
            </div>
        </div>
    );
};
