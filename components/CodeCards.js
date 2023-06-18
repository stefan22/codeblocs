import React from 'react'
import CodeCard from "@components/CodeCard";

const CodeCards = ({ data }) => {
    return (
        <div className='mt-16 cards_wrapper'>
            {data.map((post) => (
                <CodeCard
                    key={post._id}
                    post={post}
                />
            ))}
        </div>
    );
};

export default CodeCards
