/**
 * Load controllers, directives, filters, services before bootstrapping the application.
 * NOTE: These are named references that are defined inside of the config.js RequireJS configuration file.
 */
define([
    'jquery',
    'angular',
    'main',
    'routes',
    'interceptors',
    'px-datasource',
    'ng-bind-polymer'
], function ($, angular) {
    'use strict';

    /**
     * Application definition
     * This is where the AngularJS application is defined and all application dependencies declared.
     * @type {module}
     */
    var predixApp = angular.module('predixApp', [
        'app.routes',
        'app.interceptors',
        'sample.module',
        'predix.datasource',
        'px.ngBindPolymer'
    ]);

    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    predixApp.controller('MainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        //Global application object
        window.App = $rootScope.App = {
            version: '1.0',
            name: 'Predix Seed',
            session: {},
            tabs: [
            	 {state: 'home', label: 'Home'},
                {state: 'dashboards', label: 'EcoDashboard'},
                {state: 'trigen', label: 'Maintenance Times'},
				{state: 'real-time', label: 'Real Time Monitor'},
				{state: 'total', label: 'Monthly Output'},
				{state: 'documentation', label: 'Documentation'},
				
            ]
        };

         $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
             if (angular.isObject(error) && angular.isString(error.code)) {
                 switch (error.code) {
                     case 'UNAUTHORIZED':
                         //redirect
                         predixUserService.login(toState);
                         break;
                     default:
                         //go to other error state
                 }
             }
             else {
                 // unexpected error
             }
         });
    }]);


    //Set on window for debugging
    window.predixApp = predixApp;

    //Return the application  object
    return predixApp;
});
