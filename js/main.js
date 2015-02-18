(function($){

	$(function() {
        $('.aside-menu .text').on('click', function(e) {
            $('.aside-menu .expanded').removeClass('expanded');
            $(e.target).closest('li').addClass('expanded')
        });
	});

})(jQuery,undefined)