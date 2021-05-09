<?php 

	/* 
	 * 	Example of the customize_register() action hook
	 *
	 * 	Let's us add options for customizing our theme
	 * 	from the build in WordPress Customize screen.
	 * 	Gives access to four methods we can use with 
	 *	the hook.	 
	 *	 
	*/


	function my_theme_customizations( $wp_customize )
	{
	   	/*
	     *	The $wp_customize object we pass as a parameter 
	     *	gives us access to the following methods:
	     *
	     * 	- add_setting()
	     *	- add_section()
	     * 	- add_control()
		 * 	- get_setting()
		 *
		*/

	}
	add_action( 'customize_register', 'my_theme_customizations' );

?>