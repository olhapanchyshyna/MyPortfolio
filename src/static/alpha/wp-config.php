<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'workflow_panchyshyna' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', 'admin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Bgy:^`=DDA$r,_J_zT3w6HQW<#<T+CoJ7klD{@fs..2F|,ciBD=9h,uq?&4gKi6-' );
define( 'SECURE_AUTH_KEY',  'f( x(!{nbpk%)Cl}KwSyDsB2wGYEocK/HM+0:x8.H6Z&8Q:d[_{-P%,3;AExZPR=' );
define( 'LOGGED_IN_KEY',    'MCMo#9D5l?j u}R)P3stj$^_F4/Nnl7)ntvq7YGet&$;<7rxxs/^a~mfmwz::0L$' );
define( 'NONCE_KEY',        'n@r`D{GaS}:(%>4E1>j?eRn_-!ISM45@CjL2JQ3%T]sfn!UkSfxXp0h6ZDj7EV)x' );
define( 'AUTH_SALT',        'hnx`7s@Px?D9;Vg(<c:gSWuWk(A-C*v9G91Q:p-fAQ!H2cmCJV_^Duhl/[}v9:bI' );
define( 'SECURE_AUTH_SALT', 'UaX1C3vJrY>lVfRpRSi35g[S[(P:Wn4e4OyS30`-KLB,Pd/,fUS`/11awzp_9snA' );
define( 'LOGGED_IN_SALT',   '$f57iUDG0/Dy*Cg]0/;WIF(LS C4h|bs4Sr#*Id7{FbTw$2>t6fn%Do:F=P)El.T' );
define( 'NONCE_SALT',       'QG D,z}VH%tQ<zkj*{&z2uVMHggo6L1T<BT4B*R{,%sSR!8<A7}^S)z:$E^5Uj1`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
