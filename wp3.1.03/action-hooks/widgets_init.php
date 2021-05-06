<?php 

	/* 
	 * 	Example of the widgets_init() action hook
	 *
	 * 	As soon as the widgets get initialized,
	 * 	we tell WordPress to create a new widget,
	 * 	called My_Widget	
	*/

	function my_plugin_widget() {

		register_widget( 'My_Widget' );
		
	}

	add_action( 'widgets_init', 'my_plugin_widget' );
?>