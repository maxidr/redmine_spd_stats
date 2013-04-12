$(document).ready(function() {
  var size = $("#stats-bar-container").width() - 25;
  var left_size_to_hide = "-" + size + "px";

  if( $.cookie('spd_stat_bar_close') == 1 ){
    hide_bar(false);
  }

  $("#stats-bar .close_icon").on('click', function(e){
    hide_bar(true);
    $.cookie('spd_stat_bar_close', 1, { path:  '/' });
  });

  $("#stats-bar .open_icon").on('click', function(e){
    show_bar();
    $.removeCookie('spd_stat_bar_close', { path: '/' });
  });
});


function show_open_icon(){
  $("#stats-bar .open_icon").removeClass('hide').addClass('show');
}

function hide_open_icon(){
  $("#stats-bar .open_icon").removeClass('show').addClass('hide');
}

function show_bar(){
  $("#stats-bar-container").animate({left: "0px"});
  hide_open_icon();
}

function hide_bar(animated){
  if( animated ){
    $("#stats-bar-container").animate(left_size_to_hide());
  }else{
    $("#stats-bar-container").css(left_size_to_hide());
  }
  show_open_icon();
}

function left_size_to_hide(){
  var size = $("#stats-bar-container").width() - 25;
  return {left: "-" + size + "px"};
}

