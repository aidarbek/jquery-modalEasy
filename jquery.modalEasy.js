(function( $ ) {
  $.fn.modalEasy = function(state) {
  	  this.hide();
  	  this.addClass("modalEasy");
      if(state=="show") 
      {
      	this.show();
      }
      else if(state=="hide") 
      {
      	this.hide();
      }
  };
})(jQuery);