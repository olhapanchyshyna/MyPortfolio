    <footer class="footer">
        <div class="container">
            <div class="footer__contacts">
                <div class="footer__logo">
                    <?php the_custom_logo()?>
                </div>
                <div class="number">
                    <div class="number__icon"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/yl-phone.svg" alt="phone"></div>
                    <div class="number__phone"><?php the_field('number', 41);?></div>
                </div>
                <div class="footer__adress"><?php the_field('address', 41);?></div>
                <div class="footer__mail"><?php the_field('mail', 41);?></div>
                <button class="btn footer__button">
                    <img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/settings.svg" alt="settings">
                    <span class="btn__text"><?php the_field('contact_btn', 41);?></span>
                </button>
                <div class="footer__right"><?php the_field('rights', 41);?></div>
            </div>
            <div class="footer__menu">
                <div class="footer__list">
                    <div class="footer__item">
                        <div class="footer__item__title"><?php the_field('footer_title_1',59);?></div>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_1_item_1',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_1_item_2',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_1_item_3',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_1_item_4',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_1_item_5',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_1_item_6',59);?></a>
                    </div>
                    <div class="footer__item">
                        <div class="footer__item__title"><?php the_field('footer_title_2',59);?></div>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_2_item_1',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_2_item_2',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_2_item_3',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_2_item_4',59);?></a>
                    </div>
                    <div class="footer__item">
                        <div class="footer__item__title"><?php the_field('footer_title_3',59);?></div>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_3_item_1',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_3_item_2',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_3_item_3',59);?></a>
                        <a class="footer__item__link" href="#"><?php the_field('footer_col_3_item_4',59);?></a>
                    </div>
                </div>
                <div class="footer__media">
                    <a href="<?php the_field('youtube', 41);?>" target="_blank" class="footer__media__item"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/media/youtube.svg" alt="youtube"></a>
                    <a href="<?php the_field('facebook', 41);?>" target="_blank" class="footer__media__item"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/media/facebook.svg" alt="facebook"></a>
                    <a href="<?php the_field('pinterest', 41);?>" target="_blank" class="footer__media__item"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/media/pinterest.svg" alt="pinterest"></a>
                    <a href="<?php the_field('instagram', 41);?>" target="_blank" class="footer__media__item"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/media/instagram.svg" alt="instagram"></a>
                </div>
            </div>
        </div>
    </footer>
  </body>
</html> 