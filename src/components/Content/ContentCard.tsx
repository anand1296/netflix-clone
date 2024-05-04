import React from 'react';
import { ContentDetails } from '../../types/content.type';
import { APP_CONSTANTS } from '../../utils/constants';

const ContentCard = ({ data }: { data: ContentDetails }) => {
    return (
        <div className="relative w-[20%] z-10 cursor-pointer shrink-0 rounded-sm transition-border duration-150 hover:border-2 hover:border-white">
            <img
                className="w-full object-cover aspect-video rounded-sm"
                src={`${APP_CONSTANTS.API.TMDB.IMG_URL}/${data.poster_path}`}
                alt=""
            />
        </div>
    );
};

export default ContentCard;
