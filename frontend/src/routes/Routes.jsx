import Spinner from 'components/Spinner/Spinner.component';
import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as RouteEnum from '.';

import { NotFoundPage } from 'pages/Error/404';

class Routes extends Component {

  render() {
    return (
      <>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={RouteEnum.HOME} />
            <Route path="/blog-list" component={RouteEnum.BLOG_LIST} />
            <Route exact path="/edit-blog" component={RouteEnum.EDIT_BLOG} />
            <Route exact path="/blog-type" component={RouteEnum.BLOG_TYPE} />
            <Route exact path="/apply" component={RouteEnum.APPLICATION_FORM} />
            <Route
              exact
              path="/apply-success"
              component={RouteEnum.APPLICATION_FORM_SUCCESS}
            />
            <Route path="/mentors" component={RouteEnum.MENTORS} />
            <Route exact path="/leadership" component={RouteEnum.LEADERSHIP} />
            <Route exact path="/program" component={RouteEnum.PROGRAM} />
            <Route exact path="/about" component={RouteEnum.ABOUT} />
            <Route exact path="/stories" component={RouteEnum.STORIES} />
            <Route exact path="/privacy" component={RouteEnum.PRIVACY} />
            <Route exact path="/terms" component={RouteEnum.TERMS} />
            <Route
              exact
              path="/code-of-conduct"
              component={RouteEnum.CODE_OF_CONDUCT}
            />
            <Route exact path="/login" component={RouteEnum.LOGIN} />
            <Route exact path="/register" component={RouteEnum.REGISTER} />
            <Route exact path="/profile" component={RouteEnum.PROFILE} />
            <Route path="/blogpost/:id" component={RouteEnum.BLOGPOST} />
            <Route path="/ping">pong</Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
export default Routes;
