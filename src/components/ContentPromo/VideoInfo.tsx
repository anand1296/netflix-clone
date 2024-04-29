import React from 'react';
import Button from '../common/Button';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ContentDetails } from '../../types/content.type';

const VideoInfo = ({ data }: { data: ContentDetails }) => {
    const { title, overview } = data;
    return (
        <div className=" absolute top-0 bottom-0 left-0 right-0 h-full w-full">
            <div className="absolute text-white bottom-[35%] flex flex-col left-[4%] justify-end w-[36%] z-10">
                <div className="text-4xl font-bold my-4">{title}</div>
                <div className="text-[1.2vw] font-normal w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,.45)] my-4">
                    <p>{overview}</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={() => {}}
                        variant="BG_WHITE"
                        leftIcon={faPlay}
                    >
                        Play
                    </Button>
                    <Button
                        onClick={() => {}}
                        leftIcon={faInfoCircle}
                        variant="BG_GRAY"
                    >
                        More Info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VideoInfo;
