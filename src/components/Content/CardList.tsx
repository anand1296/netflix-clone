import React from 'react';
import ContentCard from './ContentCard';
import { ContentDetails, ContentList } from '../../types/content.type';

const CardList = ({
    title,
    contentList,
}: {
    title: string;
    contentList: Array<ContentDetails>;
}) => {
    return (
        <div className="w-full flex flex-col px-[4%] bg-[#141414] pb-8">
            <div className="text-md font-medium text-white my-2">
                {title}
                {/* <span>Explore all</span> */}
            </div>
            <div className="relative flex overflow-auto gap-2">
                {contentList.map((item) => (
                    <ContentCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
