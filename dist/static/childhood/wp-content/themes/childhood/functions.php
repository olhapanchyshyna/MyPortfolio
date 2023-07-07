<?php

add_action('wp_enqueue_scripts', 'childhood_styles');
add_action('wp_enqueue_scripts', 'childhood_scripts');
add_theme_support('custom-logo');
add_theme_support('menus');
add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);

function childhood_styles(){
    wp_enqueue_style('childhood_style', get_stylesheet_uri());
}

function childhood_scripts(){
    wp_enqueue_script('childhood_scripts', get_template_directory_uri() . '/assets/js/main.min.js', array(), null, true);
}

function filter_nav_menu_link_attributes($atts, $item, $args){
    if($args->menu === 'Main'){
        $atts['class'] = 'header__nav-item'; 

        if($item -> current){
            $atts['class'] .= ' header__nav-item-active';
        }

        if( $item->ID === 178 && ( in_category( 'soft_toys' ) || in_category( 'educational_toys' ))){
            $atts['class'] .= ' header__nav-item-active';
        }
    };
    return $atts;
}

?>
