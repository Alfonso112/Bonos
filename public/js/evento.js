(function($) {
  "use strict"; 

  $("#sidebarToggle").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  
  });

})(jQuery); 




