import React from 'react';

const UpvotesSection = ({articleName, upvotes, setArticalInfo}) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`,{
            method: 'post'
        });
        const body = await result.json();
        setArticalInfo(body);
    }
    return(
    <div id="upvote-section">
    <button onClick={() => upvoteArticle()}>Add upvote</button>&nbsp;
    <p> This article has {upvotes} number of upvotes</p>
    </div>
    )
}

export default UpvotesSection