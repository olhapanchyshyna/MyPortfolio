<?php

add_action('wp_enqueue_scripts', 'childhood_styles');
add_action('wp_enqueue_scripts', 'childhood_scripts');
add_theme_support('custom-logo');

function childhood_styles(){
    wp_enqueue_style('childhood_style', get_stylesheet_uri());
}

function childhood_scripts(){
    wp_enqueue_script('childhood_scripts', get_template_directory_uri() . '/assets/js/main.min.js', array(), null, true);
}


?>
