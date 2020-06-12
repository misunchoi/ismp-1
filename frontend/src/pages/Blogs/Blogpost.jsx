import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { requests } from 'utils/agent';
import fallbackBlogpostContentData from 'fallback_data/blogpostcontent.json';

import RenderBlog from 'components/RenderBlog';

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        'This is the blogpost page for blogpostcontent id ' +
        props.match.params.id,
      blogpostcontent_id: parseInt(props.match.params.id, 10),
      blogpostcontent: {}
    };
  }

  componentDidMount() {
    const populateBlogpostData = async () => {
      try {
        await requests
        .get('blogpostcontent/' + this.state.blogpostcontent_id + '/')
            .then(result => {
              this.setState({
                blogpostcontent: result,
                content: result.body_content
              });
            });

      } catch (error) {
        console.log("there was an error in blogposts");
        console.log(fallbackBlogpostContentData[0]['id']);
        let fallbackBlogpostContent = fallbackBlogpostContentData.filter(blogpostJson => {
          return this.state.blogpostcontent_id === blogpostJson.id;
        });
        if (fallbackBlogpostContent.length === 0) {
          this.setState({content: "The requested blogpost was not found"});
        } else {
          this.setState({
            blogpostcontent: fallbackBlogpostContent[0],
            content: fallbackBlogpostContent[0]['body_content'],
          });
        }

      }
    }
    populateBlogpostData();
  }

  render() {
    return (
      <RenderBlog
        blogpostcontent_id={this.state.blogpostcontent_id}
        initial_content={this.state.content}
      />
    );
  }
}

export default withRouter(Blogpost);
