<?php 

	/* 
	 * 	Example of the wp_enqueue_scripts() action hook
	 *
	 * 	Let's us insert CSS and JS into the front-end
	 * 	of the active template.  
	 * 	Inserts inside of the wp_head() function.	 
	 *	Commonly used when building custom themes.
	 *	 
	*/


	function my_plugin_front_end_css() {
		
		wp_enqueue_style( 'my_plugin_front_end_css', plugins_url('css/front-end.css', __FILE__) );    
	
	}
	add_action( 'wp_enqueue_scripts', 'my_plugin_front_end_css' );


?>