(function($){

Drupal.behaviors.zoomnow = {
  attach: function(context, settings) {
       
       var fetchOptions = Drupal.settings['zoomnow_selected_option']['option_selected'];
       if(fetchOptions == "hover"){
       	$(".zoomnow").zoom();
       }
       if(fetchOptions == "click_active"){
       	$('.zoomnow').zoom({ on:'click' });
       }
  }
};

})(jQuery);