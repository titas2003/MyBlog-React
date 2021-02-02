import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from './article-content';
import PageNotFoundPage from './PageNotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentFrom from '../components/AddCommentForm';


const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    const [artticleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    useEffect(() => {
        const fetchDate = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchDate();
        // setArticleInfo({upvotes: 3})
    }, [name]);

    const otherArticles = ArticleContent.filter(article => article.name !== name);
    if(!article) {
        return(<PageNotFoundPage />)
    }
    return(
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={artticleInfo.upvotes} setArticalInfo={setArticleInfo} />
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={artticleInfo.comments} />
            <AddCommentFrom articleName={name} setArticleInfo={setArticleInfo} />
            <hr />
            <h3><u>Other Articles</u></h3>
            <ArticlesList articles={otherArticles} />
        </>
    )
}

export default ArticlePage;