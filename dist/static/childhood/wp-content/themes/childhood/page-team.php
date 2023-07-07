<?php
/*
Template name: Наша команда
*/
?>
<?php get_header(); ?>

<div class="specialists">
    <div class="container">
        <div class="title">Наша команда</div>
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <img class="specialists__img" src="<?php the_field('team_img'); ?>" alt="наша команда">
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>