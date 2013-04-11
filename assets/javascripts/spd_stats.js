var sticky_offset;
var stats_bar_id = "#stats-bar";

$(document).ready(function() {
  var original_position_offset = $(stats_bar_id).offset();
  sticky_offset = original_position_offset.top;
  $(stats_bar_id).css('position', 'fixed');
});

$(window).scroll(function () {
  var sticky_height = $(stats_bar_id).outerHeight();
  var where_scroll = $(window).scrollTop();
  var window_height = $(window).height();
                 

  if((where_scroll + window_height) > sticky_offset) {
    $(stats_bar_id).css('position', 'relative');
  }
                      
  if((where_scroll + window_height) < (sticky_offset + sticky_height))  {
    $(stats_bar_id).css('position', 'fixed');
  }
                          
});

