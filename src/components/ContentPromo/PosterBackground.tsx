import React from 'react';
import { APP_CONSTANTS } from '../../utils/constants';

const PosterBackground = ({ backdrop_path }: { backdrop_path: string }) => {
    console.log(`${APP_CONSTANTS.API.TMDB.IMG_URL}/${backdrop_path}`);
    return (
        <>
            <div className="bottom-0 left-0 absolute right-0 top-0">
                <img
                    className="w-screen aspect-video"
                    src={`${APP_CONSTANTS.API.TMDB.IMG_URL}/${backdrop_path}`}
                />
            </div>
            <div className="fixed bg-[linear-gradient(77deg,_rgba(0,_0,_0,_.6),_transparent_85%)] bottom-[0] left-[0] opacity-100 right-[26.09%] top-[0] transition-opacity duration-500"></div>
        </>
    );
};

export default PosterBackground;
