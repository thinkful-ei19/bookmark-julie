'use strict';
/* global $, api */

//eslint -disable-next-line no-unused-vars

const bookmarkList = (function(){

  function generateBookmark(bookmark) {
    // $('.bookmark-list').
    return `<li class="bookmark-item" data-id="${bookmark.id}">
        ${bookmark.title} ${bookmark.link} ${bookmark.rating}
      </li>`;
  
  }

  function handleNewBookmarkSubmit() {
    $('#js-bookmark-form').on('submit', function() {
      event.preventDefault();
      const newBookmarkName = $('.bookmark-list').val();
      $('.bookmark-list').val('');
      api.createItem(newBookmarkName, (newItem) => {
        store.addItem(newItem);
        // render();
      });
    });
  }

  function bindEventListeners() {
    handleNewBookmarkSubmit();
  }


 



  return {
    generateBookmark,
    bindEventListeners
  };
}());

// const bookmark = {
//   id: 2,
//   title: 'hello',
//   link: 'www.com',
//   rating: 3
// };



