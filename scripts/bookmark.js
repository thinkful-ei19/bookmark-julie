'use strict';
/* global $, store, api, cuid */

//eslint -disable-next-line no-unused-vars

const bookmarkList = (function(){

  function generateBookmark(bookmark) {
    return `<li class="bookmark-item" data-bookmark-id="${bookmark.id}">
        <div class="item">
          <p class="item-title">${bookmark.title}</p>
          <p class="bookmark-descr hidden">${bookmark.desc}</p>
          <div class="item-info">
          <p>${bookmark.url}</p> 
          <p class="rating">${bookmark.rating}</p>
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
        desc: $('.js-bookmark-entry-description').val(),
        rating: $('.js-bookmark-entry-rating').val(),
        url: $('.js-bookmark-entry-url').val(),
        id: cuid()
      };
      $('.js-bookmark-entry-title').val('');
      $('.js-bookmark-entry-description').val('');
      $('.js-bookmark-entry-rating').val('');
      $('.js-bookmark-entry-url').val('');
      api.createBookmark (newBookmark, function(){
        store.addItem(newBookmark);
        renderBookmarkList();
      })
        .fail(renderError);

 
    });
  }

  function renderNewBookmark(data) {
    const bookmarkElement = generateBookmark(data);
    $('#bookmark-list').prepend(bookmarkElement);
  }

  function handleDetails() {
    $('#bookmark-list').on('click', '#details-toggle', (event) => {
      const bookmarkId = $(event.currentTarget).attr('data-bookmark-id');
      // $(event.currentTarget).find('.bookmark-descr hidden').removeClass('hidden');
      $(event.currentTarget).parent().find('p.bookmark-descr').toggleClass('hidden');
    });
    $('#bookmark-list').on('click', '#details-delete', (event) => {
      const bookmarkId = $(event.currentTarget).attr('data-bookmark-id');
      // $(event.currentTarget).find('.bookmark-descr hidden').removeClass('hidden');
      // $(event.currentTarget).parent().find('p.bookmark-descr').toggleClass('hidden');
      console.log('delete');
    });
  }


  //storing data as an array which has the method filter 
  //filter on array based on 
  //if click 5 then display filter rating of 5
  //if click __ read filter off of __ storing that into a variable and bring it out later

  function handleRating() {
    $('#rating-filter').on('change', event => { //fat arrow doesn't create new scope
      const rating = $(event.target).find('option:selected').val();
      console.log(rating);
      $('.bookmark-item').each(function(item) {
        if ($(this).find('.rating').text() >= rating) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        } 
      });
    });
  }







  function renderBookmarkList() {
    api.getBookmark((bookmarks) => {
      store.items = bookmarks;
      const bookmarkHtmlElement = generateBookmarkString(store.items);
      $('#bookmark-list').html(bookmarkHtmlElement);
    });
  }
  
  function renderError(error) {
    alert(error.responseJSON.message);

  }
  

 

  // function apiIntegrate(bookmark) {
  //   api.getBookmark(bookmark, function(response){
  //     console.log(response);
  //   });
  // }

  function handleBookmarkDeleteClicked() {
    $('#bookmark-list').on('click', '#detail-delete', event => {
      const id = $(event.currentTarget).closest('li').attr('data-bookmark-id');
      api.deleteItem(id, renderBookmarkList)
        .fail(renderError);
    });
  }


  function bindEventListeners() {
    handleNewBookmarkSubmit();
    handleDetails();
    handleBookmarkDeleteClicked();
    handleRating();
  }


 



  return {
    generateBookmark,
    renderBookmarkList,
    renderError,
    bindEventListeners
  };
}());

// const bookmark = {
//   id: 2,
//   title: 'hello',
//   link: 'www.com',
//   rating: 3
// };



