'use strict';
/* global bookmarkList, store, api, $ */

$(document).ready(function() {
  bookmarkList.bindEventListeners(); //creating all the event listeners built on DOM that was already created
  //if event listener comes before DOM it won't work
  bookmarkList.renderBookmarkList();

  // api.getBookmark((bookmarks) => {
  //   bookmarks.forEach((item) => store.addItem(item)); 
  //each of the item we're getting back we're storing them into the store
  //bookmarkList.render();
  // });
  
});