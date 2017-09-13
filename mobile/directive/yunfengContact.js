/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').directive('yunfengContact', function (basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'contact.html',
        require: '',
        controller: function ($scope,contactServer,$ionicPopup) {
            $scope.datas=contactServer;
            $scope.showPopup = function() {
                $scope.data = {}

                var myPopup = $ionicPopup.show({
                    template: '<textarea  rows="8">',
                    title: '你的建议是我们前进的动力',
                    subTitle: '感谢你的反馈',
                    scope: $scope,
                    buttons: [
                        { text: '取消' },
                        {
                            text: '提交',
                            type: 'button-positive',
                        },
                    ]
                });
                myPopup.then(function(res) {

                });

            };
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});


