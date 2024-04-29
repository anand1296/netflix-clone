import React from 'react';
import ContentCard from './ContentCard';

const CardList = ({ title, contentList }: any) => {
    return (
        <div className="w-full flex flex-col px-[4%]">
            <div className="text-md font-medium text-white my-2">
                Popular
                {/* <span>Explore all</span> */}
            </div>
            <div className="flex overflow-auto gap-2">
                {new Array(20).fill(10).map((item) => (
                    <ContentCard data={{}} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
