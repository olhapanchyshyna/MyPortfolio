<?php get_header(); ?>
    <main>
        <section class="main">
            <div class="container">
                <div class="main__descr">
                    <h1 class="main__title"><?php the_field('main_title');?></h1>
                    <div class="main__subtitle"><?php the_field('main_subtitle');?></div>
                    <div class="main__list">
                        <div class="main__item">
                            <div class="main__item__check"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/check-mark.svg" alt="checkbox"></div>
                            <div class="main__item__text"><?php the_field('main_item1');?></div>
                        </div>
                        <div class="main__item">
                            <div class="main__item__check"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/check-mark.svg" alt="checkbox"></div>
                            <div class="main__item__text"><?php the_field('main_item2');?></div>
                        </div>
                        <div class="main__item">
                            <div class="main__item__check"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/check-mark.svg" alt="checkbox"></div>
                            <div class="main__item__text"><?php the_field('main_item3');?></div>
                        </div>
                        <div class="main__item">
                            <div class="main__item__check"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/check-mark.svg" alt="checkbox"></div>
                            <div class="main__item__text"><?php the_field('main_item4');?></div>
                        </div>
                    </div>
                    <button class="btn main__button">
                        <img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/wh-phone.svg" alt="phone">
                        <span class="main__button__text"><?php the_field('main_btn_text');?></span>
                    </button>
                </div>
                <div class="main__picture">
                    <img src="<?php the_field('main_img');?>" alt="man">
                </div>
            </div>
        </section>
    </main>
<?php get_footer(); ?>