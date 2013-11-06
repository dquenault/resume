
/*
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});
*/

/* Function which expands/shrinks sections - toggles class with auto transition */

$( ".exp_header" ).click(function() {
  $( this ).parent().find( ".exp_body" ).slideToggle( 400 );
  $( this ).find( ".icon" ).toggleClass("icon-angle-down icon-angle-up");
});
