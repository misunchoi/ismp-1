import React, { Component } from 'react';
import styled from 'styled-components';

import BlogCard from 'components/BlogCard';
import { requests } from 'utils/agent';
import theme from 'styles/theme';
import media from 'styles/media';

const MAX_RECOMMENDED_ARTICLES = 3;

const MainContainer = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendedArticlesHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 100px;
  font-family: ${theme.fonts.PTSerif};
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
  margin-top: 64px;
  width: 90%;

  ${media.tablet`
    font-size: ${theme.fontSizes.md};
    padding: 0 32px;
    width: 100%;
  `}
`;

const RecommendedArticleBorder = styled.div`
  width: 30%;
  height: 0px;
  border-top: 1px solid black;

  ${media.phone`
    width: 25%;
  `}
`;

const RecommendedArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 36px;

  ${media.phone`
    flex-direction: column;
  `}
`;

const BlogCardWrapper = styled.div`
  width: 330px;
  height: 550px;
  margin: 8px 16px;
`;

class RecommendedArticles extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.getRecommendedBlogArticles();
    }

    componentDidUpdate(prevProps) {
      if(this.props !== prevProps) {
        this.getRecommendedBlogArticles();
      }
    }

    sortRecommendedArticles(articles) {
        let sortedArticles = articles;
        sortedArticles.sort((a, b) => {
            const blogA = a.id;
            const blogB = b.id;
            // Sorting backwards --> newest to oldest
            return blogB - blogA;
        });
        return sortedArticles;
    }

    getRecommendedBlogArticles() {
        const { topic, currentArticle } = this.props;
        try {
            let articles = [];

            // Fetching recommended articles based on request
            requests.get(topic ? `blogpostcontent/?topic=${topic}` : 'blogpostcontent/').then((result) => {
                articles = this.sortRecommendedArticles(result.results);

                // Removing article that is the same as the current one
                articles = articles.filter((article) => {
                    return article.id !== currentArticle;
                });

                articles = articles.slice(0, MAX_RECOMMENDED_ARTICLES);
                this.setState({ articles });
            });
        } catch(error) {
            return;
        }
    };

    render() {
        return (
            <MainContainer>
                <RecommendedArticlesHeader>
                    <RecommendedArticleBorder/>
                    Recommended Articles
                    <RecommendedArticleBorder />
                </RecommendedArticlesHeader>
                <RecommendedArticleContainer>
                    {
                        this.state.articles.map((article, index) => {
                            return (
                                <BlogCardWrapper key={index}>
                                    <BlogCard sourcePage='blogpost' blogPost={article} position={index}/>
                                </BlogCardWrapper>
                            )
                        })
                    }
                </RecommendedArticleContainer>
            </MainContainer>
        )
    }
}

export default RecommendedArticles;
