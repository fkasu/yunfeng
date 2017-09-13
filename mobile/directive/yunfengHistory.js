/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').directive('yunfengHistory', function (historyServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'history.html',
        require: '',
        controller: function ($scope) {

            $scope.imgIonData = historyServer.getData1();

        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});
