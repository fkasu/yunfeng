
angular.module('mobileApp').directive('yunfengMy', function (myServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'my.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude, $ionicPopup, $timeout,$window) {
            $scope.img=myServer.img;
            $scope.lists=myServer.lists;
            $scope.imgPath=basePath.imgPath;
            $scope.href=function (url) {
                $window.location.href=url;
            };
            $scope.showAlert = function() {
                var alertPopup = $ionicPopup.alert({
                    buttons: [
                        {
                            text: '确定',
                            type: 'button-positive',
                        },
                    ],
                    title: '版权信息',
                    template: '<p>云峰题库移动端v1.0</p><p>云峰科技有限公司</p>'
                });
                alertPopup.then(function(res) {
                });
            };


        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});
