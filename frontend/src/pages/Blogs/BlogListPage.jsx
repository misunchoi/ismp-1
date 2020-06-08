import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import BlogList from 'components/BlogList/BlogList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const blogTestData = [
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=first',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=second',
    title: 'Adjusting to the U.S.',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=third',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  }
];

const SearchWrapper = styled.div`
  margin: 30px;
`;

const Results = styled.h3`
  margin: 8px 30px;
`;

const Title = styled.h2`
  text-align: center;
`;

const initialState = { isLoading: false, results: [], value: '' };

export default class BlogSearch extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.data, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    const { blogListData, history } = this.props;
    console.log(this.props);

    return (
      <div>
        <Link to="/blog">
          <i class="arrow left icon"></i>Blog Home
        </Link>

        <Title>Search Results</Title>

        <SearchWrapper>
          <Search
            size="medium"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            showNoResults={false}
            input={{
              input: {
                placeHolder: 'Search within topic',
                tabIndex: 0,
                autoComplete: 'off',
                class: 'prompt'
              }
            }}
            {...this.props}
          />
        </SearchWrapper>

        {value && <Results>Results for ‘{value}’</Results>}

        <BlogList data={value ? results : blogListData} />
      </div>
    );
  }
}
