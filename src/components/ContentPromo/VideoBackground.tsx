import React from 'react';

const VideoBackground = ({ ytVideoId }: { ytVideoId: string }) => {
    // const ytVideoId = ''; //'Way9Dexny3w';
    console.log(ytVideoId);
    return (
        <>
            <div className="bottom-0 left-0 absolute right-0 top-0">
                <iframe
                    className="w-screen aspect-video scale-x-100 scale-y-150"
                    src={`https://www.youtube.com/embed/${ytVideoId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=${ytVideoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="fixed bg-[linear-gradient(77deg,_rgba(0,_0,_0,_.6),_transparent_85%)] bottom-[0] left-[0] opacity-100 right-[26.09%] top-[0] transition-opacity duration-500"></div>
        </>
    );
};

export default VideoBackground;
