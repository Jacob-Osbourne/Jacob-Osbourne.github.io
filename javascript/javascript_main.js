jQuery(document).ready(function(){ 
	
  
  // Needed variables
  var $content 		= $("#content");

  // Run easytabs
  $content.easytabs({
      animate			: true,
      updateHash		: false,
      transitionIn		:'fadeIn',
      transitionOut		:'fadeOut',
      animationSpeed	:600,
      tabs				:".TopMenu",
      tabActiveClass	:'active',
    });

});