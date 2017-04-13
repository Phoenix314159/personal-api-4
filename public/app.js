angular.module('myApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-comp></home-comp>',
                component: 'homeComp'
            })
            .state('me', {
                url: '/me',
                template: '<me-comp></me-comp>',
                component: 'meComp'
            })
            .state('skills', {
                url: '/skills',
                template: '<skillz-comp></skillz-comp>',
                component: 'skillzComp'
            });
        $urlRouterProvider.otherwise('/');
    })
