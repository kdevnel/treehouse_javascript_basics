<?php 

	/* 
	 * 	Example of the excerpt_more() filter
	 *
	 * 	Let's us modify the default [...] that displays
	 *	at the end of the truncated content when we use 
	 *	the_excerpt() in our templates.
	 *
	*/

	function custom_excerpt_more( $more ) {

		return ' <a class="read-more" href="'. get_permalink( get_the_ID() ) . '">Read More &raquo;</a>';

	}
	add_filter('excerpt_more', 'custom_excerpt_more');

?>