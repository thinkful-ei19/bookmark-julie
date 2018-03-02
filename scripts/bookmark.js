'use strict';
/* global $, store, api */

//eslint -disable-next-line no-unused-vars

const bookmarkList = (function(){

  function generateBookmark(bookmark) {
    return `<li class="bookmark-item" data-bookmark-id="${bookmark.id}">
        <div class="item">
          <p class="item-title">${bookmark.title}</p>
          <p class="bookmark-descr hidden">${bookmark.description}</p>
          <div class="item-info">
          <p>${bookmark.url}</p> 
          <p>${bookmark.rating}</p>
          </div>
      <button class="bookmark-toggle" id="details-toggle"> details </button>
      <button class="bookmark-delete" id="detail-delete"> delete </button>
      </li>`;
  }

  function generateBookmarkString(bookmarkArray) {
    const bookmarks = bookmarkArray.map((bookmark) => generateBookmark(bookmark));
    return bookmarks.join('');
    //join turns it into a string
  }



  function handleNewBookmarkSubmit() {
    //event listener to grab val
    // let globalId = 1;
    $('#js-bookmark-form').on('submit', function(event) {
      event.preventDefault();
      const newBookmark = {
        // id: globalId,
        title: $('.js-bookmark-entry-title').val(),
        description: $('.js-bookmark-entry-description').val(),
        rating: $('.js-bookmark-entry-rating').val(),
        url: $('.js-bookmark-entry-url').val(),
        id: cuid()
      };
      $('.js-bookmark-entry-title').val('');
      $('.js-bookmark-entry-description').val('');
      $('.js-bookmark-entry-rating').val('');
      $('.js-bookmark-entry-url').val('');
      // if (newBookmark.title === '') {
      //   alert('Please enter a title');
      //   return false;
      // } if (newBookmark.url === '') {
      //   alert('Please enter a url');
      //   return false;
      // }

      const bookmarkString = generateBookmark(newBookmark);
      $('#bookmark-list').append(bookmarkString);
      // detailedView(globalId);
      // globalId++;
    });
  }

  function handleDetails() {
  
    $('#bookmark-list').on('click', '#details-toggle', (event) => {
      const bookmarkId = $(event.currentTarget).attr('data-bookmark-id');
      // $(event.currentTarget).find('.bookmark-descr hidden').removeClass('hidden');
      $(event.currentTarget).parent().find('p.bookmark-descr').toggleClass('hidden');
    });
  }


  // function detailedView(id) {
  //   //wherever i'm invoking id, must pass argument
  //   $(`#${id}`).on('click', function(){
  //     if ($(`#${id} .item-info p`).length === 0) {
  //       $(`#${id} .item-info`).append('<p>js-bookmark-entry-description<p>');
  //     } 
  //   });
  // }

  function renderBookmarkList() {
    api.getBookmark ((bookmarks) => {
      store.bookmarks = bookmarks;
      const bookmarkHtmlElement = generateBookmarkString(store.bookmarks);
      $('.bookmark-list').html(bookmarkHtmlElement);
    });
  }

  function apiIntegrate() {
    api.getBookmark(function(response){
      
    });
  }

  function bindEventListeners() {
    handleNewBookmarkSubmit();
    handleDetails();
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



