/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').directive('yunfengSetting', function (settingServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'setting.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude, $ionicPopup, $timeout,$window) {
            $scope.pages=settingServer.pages;
            $scope.href=function (url) {
                $window.location.href=url;
            };
            $scope.clearHistory = function() {
                var confirmPopup = $ionicPopup.confirm({
                    buttons: [
                        { text: '取消' },
                        {
                            text: '确定',
                            type: 'button-positive',
                        },
                    ],
                    title: '清除浏览历史',
                    template: '您确定要清除浏览历史吗?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                    } else {
                    }
                });
            };
            // An alert dialog
            $scope.upData = function () {
                console.log(0);
                var alertPopup = $ionicPopup.alert({
                    buttons: [
                        {
                            text: '确定',
                            type: 'button-positive',
                        },
                    ],
                    title: '检查更新',
                    template: '&nbsp;&nbsp;您的软件已是最新版本'
                });
                alertPopup.then(function (res) {

                });
            };
            $scope.quit = function() {
                var confirmPopup = $ionicPopup.confirm({
                    buttons: [
                        { text: '取消' },
                        {
                            text: '确定',
                            type: 'button-positive',
                        },
                    ],
                    title: '退出',
                    template: '您确定要退出吗?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                    } else {
                    }
                });
            };

        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});
