<?php
/*
Template name: История
*/
?>
<?php get_header(); ?>

<div class="aboutus">
    <div class="container">
        <h1 class="title">Наша история</h1>
        <div class="row">
            <div class="col-lg-6">
                <div class="subtitle"><?php the_field('first_title'); ?></div>
                <div class="aboutus__text"><?php the_field('first_text'); ?></div>
            </div>
            <div class="col-lg-6">
                <img class="aboutus__img" src="<?php the_field('first_img'); ?>" alt="мир детства">
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <img class="aboutus__img" src="<?php the_field('second_img'); ?>" alt="мир детства">
            </div>
            <div class="col-lg-6">
                <div class="subtitle"><?php the_field('second_title'); ?></div>
                <div class="aboutus__text"><?php the_field('second_text'); ?></div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="subtitle"><?php the_field('third_title'); ?></div>
                <div class="aboutus__text"><?php the_field('third_text'); ?></div>
            </div>
            <div class="col-lg-6">
                <img class="aboutus__img" src="<?php the_field('third_img'); ?>" alt="мир детства">
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>