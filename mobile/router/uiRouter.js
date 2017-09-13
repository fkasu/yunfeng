/**
 * Created by Pevon on 2016/11/15.
 */
//该路由定义为一个堆栈式【只有两层】
angular.module('mobileApp').config(function ($stateProvider, $urlRouterProvider,basePathProvider) {
    $stateProvider.state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: basePathProvider.routerTemplatePath + 'tabs.html',
    });
    $stateProvider.state('tabs.mobileHome', {
        url: '/mobileHome',
        views: {
            'mobileHome-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'mobileHome.html',
            }
        }
        
    });

    $stateProvider.state('tabs.subjectPage', {
        url: '/subjectPage',
        views: {
            'mobileHome-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'subjectPage.html',
            }
        }
    });
    $stateProvider.state('tabs.answer', {
        url: '/answer',
        views: {
            'mobileHome-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'answer.html',
            }
        }
    });
    $stateProvider.state('tabs.history', {
        url: '/history',
        views: {
            'history-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'history.html',
            }
        }
    });
    $stateProvider.state('tabs.answerHistory', {
        url: '/answerHistory',
        views: {
            'history-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'answer.html',
            }
        }
    });
    $stateProvider.state('tabs.my', {
        url: '/my',
        views: {
            'my-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'my.html',
            }
        }
    });
    $stateProvider.state('tabs.contact', {
        url: '/contact',
        views: {
            'my-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'contact.html',
            }
        }
    });
    $stateProvider.state('tabs.setting', {
        url: '/setting',
        views: {
            'my-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'setting.html',
            }
        }
    });
    $stateProvider.state('tabs.skin', {
        url: '/skin',
        views: {
            'my-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'skin.html',
            }
        }
    });

    //默认导航
    $urlRouterProvider.otherwise("/tab/mobileHome");
});



