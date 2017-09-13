/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').directive('yunfengAnswer', function (answerServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'answer.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude,$ionicPopup) {
            $scope.answerData=answerServer;
            $scope.showAlert = function () {
                console.log(0);
                var alertPopup = $ionicPopup.alert({
                    buttons: [
                        {
                            text: '确定',
                            type: 'button-positive',
                        },
                    ],
                    title: '正确答案',
                    template: '&nbsp;&nbsp;A.选项'
                });
                alertPopup.then(function (res) {

                });
            };




        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});



