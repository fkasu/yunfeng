/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').directive('yunfengSkin', function (skinServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'skin.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.titles=skinServer.titles;
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});
