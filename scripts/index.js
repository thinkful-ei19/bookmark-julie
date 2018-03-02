'use strict';
/* global bookmarkList, store, api, $ */

$(document).ready(function() {
  bookmarkList.bindEventListeners();
  bookmarkList.renderBookmarkList();

  // api.getBookmark((bookmarks) => {
  //   bookmarks.forEach((item) => store.addItem(item)); 
    //each of the item we're getting back we're storing them into the store
    //bookmarkList.render();
  // });
  
});