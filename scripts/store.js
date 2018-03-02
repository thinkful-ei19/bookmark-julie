'use strict';
/* global $ */

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const addItem = function(item) {
    this.items.push(item);
  };
  // {
  // bookmark: [
    // { 
    //   id: 1, 
    //   title: 'google maps', 
    //   link:'https://www.google.com/maps', 
    //   description:'mapquest but better', 
    //   rating:'5', 
    //   expand: false
    // },
  //   { 
  //     id: 2, 
  //     title: 'reddit', 
  //     link:'https://www.reddit.com/', 
  //     description:'social news aggregation', 
  //     rating:'5', 
  //     expand: false
  //   },
  // ],
  return {
    items: [],
    adding: false,
    expand: false,
    rating: null,

    addItem
  };
}());
  
// $(document).ready(function() {
//  bookmark.render();
// });