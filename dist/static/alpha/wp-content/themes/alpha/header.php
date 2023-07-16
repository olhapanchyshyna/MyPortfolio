<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="title" content="Alpha">
    <meta name="description" content="Appliance Repair Service">
    <title>Alpha</title>
    <link rel="stylesheet" href="css/style.min.css">
    <?php wp_head(); ?>
</head>
  <body>
    <header class="header">
        <div class="container">
            <div class="header__head">
                <div class="header__logo">
                    <?php the_custom_logo()?>
                </div>
                <div class="header__search">
                    <input type="text" name="search" placeholder="Enter City / Postal Code">
                    <div class="header__search__icons"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/search.svg" alt="search"></div>
                </div>
                <div class="number">
                    <div class="number__icon"><img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/yl-phone.svg" alt="phone"></div>
                    <div class="number__phone"><?php the_field('number', 41);?></div>
                </div>
            </div>
            <div class="header__footer">
                <nav class="header__menu">
                    <li class="header__item"><a href="#"><?php the_field('nav1', 53);?></a></li>
                    <li class="header__item"><a href="#"><?php the_field('nav2', 53);?></a></li>
                    <li class="header__item"><a href="#"><?php the_field('nav3', 53);?></a></li>
                    <li class="header__item"><a href="#"><?php the_field('nav4', 53);?></a></li>
                    <li class="header__item"><a href="#"><?php the_field('nav5', 53);?></a></li>
                    <li class="header__item"><a href="#"><?php the_field('nav6', 53);?></a></li>
                    <li class="header__item"><a href="#"><?php the_field('nav7', 53);?></a></li>
                </nav>
                <button class="btn header__button">
                    <img src="<?php echo bloginfo("template_url"); ?>/assets/images/icons/settings.svg" alt="settings">
                    <span class="btn__text"><?php the_field('contact_btn', 41);?></span>
                </button>
            </div>
        </div>
    </header>
