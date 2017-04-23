// twitter bootstrap stuff;
// not in static 'cause I want it to be bundled with the rest of javascripts
require('./bootstrap-modal')

// our own files
require('./search')
require('./entry')

var $ = require('unopinionate').selector
$(document).on('click', '.js-userLogoutBtn', function() {
  $('#userLogoutForm').submit()
  return false
}).on('click', '.js-getStorageSize', function() {
  $('.js-getStorageSize').html("<i class='on-search-size'></i>")
  $.getJSON('-/storage/size', function( results ) {
    $('.js-getStorageSize').html(getReadableFileSizeString(results.size))
  })
  return false
})

function getReadableFileSizeString(fileSizeInBytes) {

    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1000;
        i++;
    } while (fileSizeInBytes > 1000);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};
