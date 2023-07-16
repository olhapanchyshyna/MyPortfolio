<?php
    add_action('wp_enqueue_scripts', 'alpha_scripts');

    function alpha_scripts(){
        wp_enqueue_style('alpha-style', get_stylesheet_uri());
    }

    add_theme_support('custom-logo');
    add_theme_support('menus');
?>