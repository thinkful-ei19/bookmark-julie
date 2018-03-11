'use strict';
/* global $ */

// eslint-disable-next-line no-unused-vars
const store = (function() { //front end to manage data, only lasts before a refresh. in memory
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(bookmark => bookmark.id === id);
  };

  const deleteItem = (function() {
    const bookmarkId = this.findById(id)
    this.items.splice(bookmarkId, 1);
  });
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
    minimumRating: 1,
    addItem,
    findById,
    deleteItem
  };
}());
  
// $(document).ready(function() {
//  bookmark.render();
// });