$( document ).ready(function() {
    $(window).scroll(function() {  	
      if($(document).scrollTop() > 100) {    
        $('.footer').addClass("show");
      }
      else {
        $('.footer').removeClass("show");
      }
    });
  });