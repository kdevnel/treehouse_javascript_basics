<?php 

	/* 
	 * 	Example of the comments_template() filter
	 *
	 * 	Let's us override the default comment template
	 *	located at wp-includes/comment-template.php	and
	 * 	use our own comment file instead.	 
	 *
	*/

	function custom_comment_template( $comment_template ) {

        return dirname(__FILE__) . '/inc/custom-comment-template.php';

	}

	add_filter( 'comments_template', 'custom_comment_template' );

?>