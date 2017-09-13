/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').directive('yunfengTopicType', function (topicTypeServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'topicType.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.topicTypes=topicTypeServer.topicTypes;
            $scope.imgPath=basePath.imgPath;
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});



