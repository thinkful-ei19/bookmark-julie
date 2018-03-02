'use strict';
/* global $, store, api */

//eslint -disable-next-line no-unused-vars

const bookmarkList = (function(){

  function generateBookmark(bookmark) {
    // $('.bookmark-list').
    return `<li class="bookmark-item" id="${bookmark.id}">
        <div class="item">
          <p class="item-title">${bookmark.title}</p>
          <div class="item-info">
          <p>${bookmark.url}</p> 
          <p>${bookmark.rating}</p>
          </div>
        </div>
      </li>`;
  }

  // function generateBookmarkString(bookmarkList) {
  //   const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
  //   return bookmarks.join(''); 
  //   // map over array and generateBookmarkElement on each item and join
  // }

  // function renderBookmarkList() {
  //   api.getBookmarks((bookmarks) => {
  //     store.bookmarks = bookmarks;
  //     const bookmarkHtmlElement = generateBookmarkString(store.bookmarks);
  //     $('.js-bookmark-list').html(bookmarkHtmlElement);
  //   });
  // }

  // function handleAddButtonClicked() {
  //   $('.js-add-checked').change(function() {
  //     if($('input[type=checkbox]').prop('checked')) {
  //       $('.js-add-toggle').removeClass('hidden');
  //     } else {
  //       $('.js-add-toggle').addClass('hidden');
  //     }
  //   });
  // }
  
  function handleNewBookmarkSubmit() {
    let globalId = 1;
    $('#js-bookmark-form').on('submit', function(event) {
      event.preventDefault();
      const newBookmark = {
        id: globalId,
        title: $('.js-bookmark-entry-title').val(),
        description: $('.js-bookmark-entry-description').val(),
        rating: $('.js-bookmark-entry-rating').val(),
        url: $('.js-bookmark-entry-url').val()
      };
      const bookmarkString = generateBookmark(newBookmark);
      $('.bookmark-list').append(bookmarkString);
      detailedView(globalId);
      globalId++;
    });
  }

  function detailedView(id) {
    //wherever i'm invoking id, must pass argument
    $(`#${id}`).on('click', function(){
      if ($(`#${id} .item-info p`).length === 0) {
        $(`#${id} .item-info`).append('<p>js-bookmark-entry-description<p>');
      } 
    });
  }
//add id and every time it's called increment id by 1

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



