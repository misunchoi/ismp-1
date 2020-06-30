import TagManager from 'react-gtm-module';
import { format } from 'date-fns';

// taken from https://jameshfisher.com/2017/10/30/web-cryptography-api-hello-world/
async function sha256(str) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder('utf-8').encode(str)
  );
  return Array.prototype.map
    .call(new Uint8Array(buf), x => ('00' + x.toString(16)).slice(-2))
    .join('');
}

export const logSubscribe = email => {
  sha256(email.toLowerCase().trim()).then(hash => {
    const subscribeTagManagerArgs = {
      dataLayer: {
        event: 'submit_newsletter',
        hash_email: hash
      }
    };
    TagManager.dataLayer(subscribeTagManagerArgs);
  });
};

export const logApplyNowClick = () => {
  const pageViewTagManagerArgs = {
    dataLayer: {
      event: 'application_click'
    }
  };
  TagManager.dataLayer(pageViewTagManagerArgs);
};

export const logApplicationView = () => {
  const appViewTagManagerArgs = {
    event: 'application_view',
    page_type: 'application'
  };
  TagManager.dataLayer(appViewTagManagerArgs);
};

export const logApplicationProgress = stepNum => {
  const stepNames = {
    1: 'personal',
    2: 'academic'
  };
  const appProgressTagManagerArgs = {
    dataLayer: {
      event: 'application_progress',
      application_step: stepNum, // should be 1 or 2
      step_name: stepNames[stepNum] // finished the first section → 'personal'; finished the second section → 'academic'
    }
  };
  TagManager.dataLayer(appProgressTagManagerArgs);
};

export const logApplicationCompletion = email => {
  sha256(email.toLowerCase().trim()).then(hash => {
    const appCompleteTagManagerArgs = {
      dataLayer: {
        event: 'submit_application',
        hash_email: hash
      }
    };
    TagManager.dataLayer(appCompleteTagManagerArgs);
  });
};

// For logging when someone views a blog on the blog article page.
export const logContentView = blogpostcontent => {
  const contentViewArgs = {
    dataLayer: {
      event: 'view_content',
      page_type: 'content_detail',
      contents: [
        {
          content_id: blogpostcontent.id, // internal content ID
          content_name: blogpostcontent.title_content, // title of content
          content_author: blogpostcontent.author_display_name, // author
          content_first_published_date: format(
            new Date(blogpostcontent.publish_at),
            'MM/dd/yyyy'
          ), // date content published
          content_last_revised_date: format(
            new Date(blogpostcontent.updated_at),
            'MM/dd/yyyy'
          ), // date content last revised
          content_type: blogpostcontent.blogpost.type, // vlog, blog, or webinar
          content_category: 'this field is not used yet' // if we have some sort of categorization to our vlogs / blogs / webinars
        }
      ]
    }
  };
  TagManager.dataLayer(contentViewArgs);
};

// for logging when a person clicks on a blogpost from something like a featured blog
// card. This is supposed to be the general case; I had to make a special case for the
// blog list page because it messes around with the data values.
export const logContentClick = (sourcePage, blogpostcontent, position) => {
  const contentClickArgs = {
    dataLayer: {
      event: 'select_content',
      contents: [
        {
          content_id: blogpostcontent.id, // internal content ID
          content_name: blogpostcontent.title_content, // title of content
          content_author: blogpostcontent.author_display_name, // author
          content_first_published_date: format(
            new Date(blogpostcontent.publish_at),
            'MM/dd/yyyy'
          ), // date content published
          content_last_revised_date: format(
            new Date(blogpostcontent.updated_at),
            'MM/dd/yyyy'
          ), // date content last revised
          content_type: blogpostcontent.blogpost.type, // vlog, blog, or webinar
          content_category: 'this field is not used yet', // if we have some sort of categorization to our vlogs / blogs / webinars
          content_list_name: sourcePage, // homepage or blog
          content_position: position + 1 // position of content on the page
        }
      ]
    }
  };
  TagManager.dataLayer(contentClickArgs);
};

// Special case of logContentClick for clicks from the blog list page.
// The interface for blogCard is different from the blogpostcontent because the blog-list
// page processes the data from the API before generating the blog list. I could have
// refactored the entire data flow, but I don't feel like it.
export const logContentClickFromBlogList = (sourcePage, blogCard, position) => {
  const contentClickArgs = {
    dataLayer: {
      event: 'select_content',
      contents: [
        {
          content_id: blogCard.id, // internal content ID
          content_name: blogCard.title, // title of content
          content_author: blogCard.author, // author
          content_first_published_date: blogCard.published_date, // date content published
          content_last_revised_date: blogCard.updated_at, // date content last revised
          content_type: blogCard.type, // vlog, blog, or webinar
          content_category: 'this field is not used yet', // if we have some sort of categorization to our vlogs / blogs / webinars
          content_list_name: sourcePage, // homepage or blog
          content_position: position + 1 // position of content on the page
        }
      ]
    }
  };
  TagManager.dataLayer(contentClickArgs);
};

// for logging a list of blogposts to the dataLayer
export const logContentList = blogpostcontent_list => {
  const argsForContent = blogpostcontent_list.map((blogpostcontent, index) => {
    return {
      content_id: blogpostcontent.id, // internal content ID
      content_name: blogpostcontent.title_content, // title of content
      content_author: blogpostcontent.author_display_name, // author
      content_first_published_date: format(
        new Date(blogpostcontent.publish_at),
        'MM/dd/yyyy'
      ), // date content published
      content_last_revised_date: format(
        new Date(blogpostcontent.updated_at),
        'MM/dd/yyyy'
      ), // date content last revised
      content_type: blogpostcontent.blogpost.type, // vlog, blog, or webinar
      content_category: 'this field is not used yet', // if we have some sort of categorization to our vlogs / blogs / webinars
      content_list_name: 'blog', // homepage or blog
      content_position: index + 1 // position of content on the page
    };
  });
  const contentArgs = {
    dataLayer: {
      event: 'view_content_list',
      page_type: 'content_list',
      content: argsForContent
    }
  };
  TagManager.dataLayer(contentArgs);
};
