requirejs.config({
    baseUrl: 'static/',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        js: 'js/minasblog'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        }
    }
});

require(['jquery', 'bootstrap', 'js'], function () {

});