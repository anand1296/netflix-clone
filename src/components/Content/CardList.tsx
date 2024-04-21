import React from 'react';
import ContentCard from './ContentCard';

const CardList = () => {
    return (
        <div className="w-full flex flex-col">
            <div>
                Title
                <span>Explore all</span>
            </div>
            <div className="flex overflow-x-auto">
                {new Array(5).map((item) => (
                    <ContentCard data={{}} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
