/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').directive('yunfengGuide', function (guideServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'guide.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.myActiveSlide = 0;
            $scope.url=guideServer.url;
            $scope.bgs=guideServer.bgs;
            $scope.imgPath=basePath.imgPath;
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});



