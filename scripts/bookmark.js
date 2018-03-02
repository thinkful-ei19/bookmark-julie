'use strict';
/* global $, store, api */

//eslint -disable-next-line no-unused-vars

const bookmarkList = (function(){

  function generateBookmark(bookmark) {
    // $('.bookmark-list').
    return `<li class="bookmark-item" data-id="${bookmark.id}">
        <div class="item">
          <p class="item-title">${bookmark.title}</p>
          <div class="item-info">
          <p>${bookmark.link}</p> 
          <p>${bookmark.rating}</p>
          </div>
        </div>
      </li>`;
  
  }

  function handleNewBookmarkSubmit() {
    $('#js-bookmark-form').on('submit', function(event) {
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



