/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').directive('yunfengSubjectPage', function (subjectServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'subjectPage.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.subjectData=subjectServer;
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});
