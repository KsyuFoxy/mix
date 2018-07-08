const mix = require('laravel-mix');

const mixPlugins = [];
const mixRules = [];

// config
mix.setPublicPath('webresources');

// js
mix.js('assets/js/main.js', 'webresources/js/bundle.js')
    .sourceMaps();

mix.sass('assets/sass/main.scss', 'webresources/css/style.css')
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer'),
        ]
    })




// merge all plugins and module rules
mix.webpackConfig({
    module: { rules: mixRules },
    plugins: mixPlugins
});
