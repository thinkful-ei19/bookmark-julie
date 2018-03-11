'use strict';
/* global $ */
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/julie';

  const getBookmark = function(callback) {
    $.getJSON(BASE_URL + '/bookmarks', callback);
  };

  const createBookmark = function(title, callback) {
    const newEntry = JSON.stringify(title);
    return $.ajax({ 
      'url': BASE_URL + '/bookmarks',
      'method': 'POST',
      'contentType': 'application/json',
      'data': newEntry,
      'success': callback
    });
  };

  const deleteItem = function(id, callback) {
    return $.ajax({
      'url': BASE_URL + '/bookmarks/' + id,
      'method': 'DELETE',
      'contentType': 'application/json',
      'success': callback
    });
  } ;

  return {
    getBookmark,
    createBookmark,
    deleteItem
  };
}());