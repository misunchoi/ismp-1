import TagManager from 'react-gtm-module';

// taken from https://jameshfisher.com/2017/10/30/web-cryptography-api-hello-world/
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(str));
  return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
}

export const logSubscribe = email => {
  sha256(email.toLowerCase().trim()).then(hash => {
    const subscribeTagManagerArgs = {
      dataLayer: {
        'event': 'submit_newsletter',
        'hash_email': hash,
      }
    }
    TagManager.dataLayer(subscribeTagManagerArgs);
  })
}

export const logApplyNowClick = () => {
  const pageViewTagManagerArgs = {
    dataLayer: {
      'event': 'application_click'
    }
  }
  TagManager.dataLayer(pageViewTagManagerArgs)
}

export const logApplicationView = () => {
   const appViewTagManagerArgs = {
     'event': 'application_view',
     'page_type': 'application'
   };
   TagManager.dataLayer(appViewTagManagerArgs);
}

export const logApplicationProgress = step_num => {
  const step_names = {
    1: 'personal',
    2: 'academic'
  };
  const appProgressTagManagerArgs = {
    'event': 'application_progress',
    'application_step': step_num, // should be 1 or 2
    'step_name': step_names[step_num]// finished the first section → 'personal'; finished the second section → 'academic'
  };
  tagManager.dataLayer(appProgressTagManagerArgs);
}

export const logApplicationCompletion = email => {
  sha256(email.toLowerCase().trim()).then(hash => {
    const appCompleteTagManagerArgs = {
      dataLayer: {
        'event': 'submit_application',
        'hash_email': hash,
      }
    };
    TagManager.dataLayer(appCompleteTagManagerArgs);
  });
}