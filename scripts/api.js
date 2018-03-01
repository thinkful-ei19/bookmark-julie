'use strict';
/* global $ */
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/julie';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  };

  return {
    getItems,
  };
}());