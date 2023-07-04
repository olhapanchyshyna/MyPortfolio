<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'childhood' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'child_admin' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '1323' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4~$%kX2hjx1|Dv{#l7|Qj;}XfgH[}3&TpMVO=EQcWWSl*,B#R=:n8W9B*c@Q]zQw' );
define( 'SECURE_AUTH_KEY',  '.iiaM {0?~|M#NN}:[@Z{g*fHU>*xj}3QzQ5oMedPH|m2~u1Gk~hTiF$tYLkpX4>' );
define( 'LOGGED_IN_KEY',    ':FNTz)-[Dv?ik|yZlCjLP>=kh+knB1OZrP(q6f$nP7_v;;FzbD4R@=idYPl1Mxlp' );
define( 'NONCE_KEY',        '.i^E<|QUyt1h`sbqTUEfWfOLvT=k3[pK{45ZQSLeo<pN<.a/q-s,pZU<){{qX@%^' );
define( 'AUTH_SALT',        'zVC:aWPuhI|8~|g:hVlA%K?fsg_v`>#1!* eD_cIQwawA<>|AQm%gRsi5i>cC`Q1' );
define( 'SECURE_AUTH_SALT', 'AMqy)iR@h`lsM{J0^Qv5]++eo,A<i {~4<B#<QGF-*X9rSs6,)|hBn!]F0K+@vx}' );
define( 'LOGGED_IN_SALT',   '-GQwZ8-yuN:_,FGmCw.x|zc,Dv_N!S+f/jRD.ubcGH;>q*jues,xH(Jw-98GCX5~' );
define( 'NONCE_SALT',       'S[]A2KaJUh9n*yG9eW{XI=eGcPo=H0-18]?&Wht^#%<<?I?L5xfb4$7*r %aoG@$' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
