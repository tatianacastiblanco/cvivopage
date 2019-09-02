import { Injectable } from '@angular/core';


/*
  Generated class for the AnalyticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var ga:Function;
@Injectable()
export class AnalyticsProvider {

  constructor (
                 ) {
    console.log('Hello AnalyticsProvider Provider');
  }

  startTrackerWithId(id) {
    ga('create', {
      storage: 'none',    ​
      trackingId: id,    ​
      clientId: localStorage.getItem('ga:clientId')
    });    ​
    ga('set', 'checkProtocolTask', null);​
    ga('set', 'transportUrl', 'https://www.google-analytics.com/collect');
    ga(function(tracker) {
      if ( !localStorage.getItem('ga:clientId') ) {
        localStorage.setItem( 'ga:clientId', tracker.get('clientId') );
      }
    });
  }
  trackView(screenName) {
    console.log(screenName);
    ga('set', 'page', screenName);
    ga('send', 'pageview');
  }
  
  trackEvent(category, action, label?, value?) {
    ga('send', 'event', {
      eventCategory: category,
      eventLabel: label,
      eventAction: action,
      eventValue: value
    });
  }

}
