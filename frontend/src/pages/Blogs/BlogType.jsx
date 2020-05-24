import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import CategoryToggle from '../../components/EditBlog/CategoryToggle';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 3% 0;
    align-items: center;
`;

const Header = Styled.p`
    font-size: ${props => props.theme.fontSizes.h2};
    font-weight: bold;
    text-align: center;
`;

const CategoryContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    column-count: 3;
    align-items: center;
    justify-content: center;
    margin: 0 5%;
    padding: 5%;

`;

const NextButton = Styled(Link)`
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    padding: 15px;
    border-radius: 8px;
    text-transform: uppercase;
    text-align: center;
    font-size: ${props => props.theme.fontSizes.p};
    width: 200px;
    cursor: pointer;
    &:hover {
        opacity: 80%;
        color: ${props => props.theme.colors.white};
    }
`;

class BlogType extends Component {
    constructor(props) {
        super(props);
        this.toggleRefs = [];
        this.categories = ['Classic', 'Blog', 'Article', 'Webinar', 'Webinar', 'Webinar', 'Webinar', 'Webinar'];
        this.onClickCategory = this.onClickCategory.bind(this);
    }

    onClickCategory = (index) => {
        this.toggleRefs.map((_, i) => {
            if(i !== index) {
                this.toggleRefs[i].resetCategory();
            }
        })
    }

    render() {
        return (
            <Container>
                <Header>What kind of blog post do you want to make?</Header>
                <CategoryContainer>
                {
                    this.categories.map((category, index) => {
                        return <CategoryToggle
                                    ref={ref => this.toggleRefs[index] = ref} 
                                    onClickCategory={this.onClickCategory} 
                                    key={index} 
                                    text={category}
                                    item={index}
                                />
                    })
                }
                </CategoryContainer>
                <NextButton to="/edit-blog">Next</NextButton>
            </Container>
        )
    }
}

export default BlogType;