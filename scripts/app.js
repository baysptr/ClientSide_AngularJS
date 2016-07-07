'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular
        .module('FrontEnd', [
            'ui.router',
            'ngAnimate',
            'ngResource'
        ])
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: 'templates/home.html',
                            controller: 'HomeController'
                        });
            }])
        .directive('postsPagination', function () {
            return{
                restrict: 'E',
                template: '<ul class="pagination">' +
                        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="getSiswa(\'\', 1)">&laquo;</a></li>' +
                        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="getSiswa(\'\', currentPage-1)">&lsaquo; Prev</a></li>' +
                        '<li ng-repeat="i in range" ng-class="{active : currentPage == i}">' +
                        '<a href="javascript:void(0)" ng-click="getSiswa(\'\', i)">{{i}}</a>' +
                        '</li>' +
                        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="getSiswa(\'\', currentPage+1)">Next &rsaquo;</a></li>' +
                        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="getSiswa(\'\', totalPages)">&raquo;</a></li>' +
                        '</ul>'
            };
        });
