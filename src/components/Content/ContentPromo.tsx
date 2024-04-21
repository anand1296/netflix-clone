import React from 'react';
import VideoBackground from '../ContentPromo/VideoBackground';
import VideoInfo from '../ContentPromo/VideoInfo';

export const ContentPromo = ({ data }: any) => {
    console.log(data);
    return (
        <div className="bg-[#000] h-[56.25vw] absolute w-full z-[-1] top-0">
            <VideoBackground />
            <VideoInfo data={data} />
        </div>
    );
};
