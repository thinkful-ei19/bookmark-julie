'use strict';
/* global cuid */

// eslint-disable-next-line no-unused-vars
const store = {
  bookmark: [
    { 
      id: cuid(), 
      title: 'google maps', 
      link:'https://www.google.com/maps', 
      description:'mapquest but better', 
      rating:'null'
    },
  ],
  adding: false,
  expand: null,
  rating: null
};
  
$(document).ready(function() {
//   bookmark.render();
});