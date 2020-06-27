import TagManager from 'react-gtm-module';

export const logApplyNowClick = () => {
  const pageViewTagManagerArgs = {
    dataLayer: {
      'event': 'application_click'
    }
  }
  TagManager.dataLayer(pageViewTagManagerArgs)
}