'use strict';
/* global $ */

// eslint-disable-next-line no-unused-vars
const store = {
  bookmark: [
    { 
      id: 1, 
      title: 'google maps', 
      link:'https://www.google.com/maps', 
      description:'mapquest but better', 
      rating:'5', 
      expand: false
    },
    { 
      id: 2, 
      title: 'reddit', 
      link:'https://www.reddit.com/', 
      description:'social news aggregation', 
      rating:'5', 
      expand: false
    },
  ],
  adding: false,
  expand: false,
  rating: null
};
  
$(document).ready(function() {
//   bookmark.render();
});