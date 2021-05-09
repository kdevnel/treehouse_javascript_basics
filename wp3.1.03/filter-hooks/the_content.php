<?php 

	/* 
	 * 	Example of the the_content() filter hook
	 *
	 * 	Let's us modify the main content of a post or page.
	 *  Accepts the original content as a parameter
	 *	and then returns the modified content to display
	 *	on the page. 
	 *
	*/


	function make_content_social( $content ) {
		
		/*
		 *	Checks to make sure code executes only on
		 * 	single pages and inside of the main Loop		 
		 *
		*/

		if( is_singular() && is_main_query() ) {
		
			$social_content = 'Insert in the social sharing code here';
			$content .= $new_content;	
		
		}	
		
		return $content;
	}
	add_filter('the_content', 'make_content_social');
		

?>