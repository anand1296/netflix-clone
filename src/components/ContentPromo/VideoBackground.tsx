import React from 'react';

const VideoBackground = () => {
    const ytVideoId = 'Way9Dexny3w';

    return (
        <>
            <div className="bottom-0 left-0 absolute right-0 top-0">
                <iframe
                    className="w-screen aspect-video"
                    src={`https://www.youtube.com/embed/${ytVideoId}?&autoplay=1&mute=1&loop=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="bg-[linear-gradient(77deg,_rgba(0,_0,_0,_.6),_transparent_85%)] bottom-[0] left-[0] opacity-100 absolute right-[26.09%] top-[0] transition-opacity duration-500"></div>
        </>
    );
};

export default VideoBackground;
